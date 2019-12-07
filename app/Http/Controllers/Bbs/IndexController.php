<?php

namespace App\Http\Controllers\Bbs;

use App\Enums\DirectionEnum;
use App\Http\Controllers\Controller;
use App\Models\TBbsPost;
use App\Services\PaginationService;
use App\Utils\DateUtil;
use Illuminate\Http\Request;

class IndexController extends Controller
{
    private const PROP_CREATE = 'create';

    private const PROP_COLUMN_MAPPING = [
        self::PROP_CREATE => 'created_at',
    ];

    private const LIMIT = 5;

    public function __invoke(Request $request)
    {
        $orderColumn = self::PROP_COLUMN_MAPPING[$request->route('prop')]
            ?? self::PROP_COLUMN_MAPPING['create'];

        $orderDir = $request->route('dir') === 'asc'
            ? DirectionEnum::asc()
            : DirectionEnum::desc();

        $pageNum = (int) ($request->route('page') ?? 1);
        $offset = ($pageNum - 1) * self::LIMIT + 1;

        $posts = TBbsPost::getPosts(self::LIMIT, $offset, $orderColumn, $orderDir);
        $idArray = array_map(function (TBbsPost $record) {
            return $record->id;
        } , $posts);
        $comments = TBbsPost::getCommentsByIdArray($idArray);

        $viewData = array_map(function (TBbsPost $post) use ($comments) {
            $thisComments = array_filter($comments, function (TBbsPost $comment) use ($post) {
                return $comment->id = $post->id;
            });
            $thisComments = array_map(function (TBbsPost $post) {
                return [
                    'id'        => $post->id,
                    'title'     => $post->title,
                    'author'    => $post->author,
                    'content'   => $post->content,
                    'createdAt' => DateUtil::format($post->createdAt),
                ];
            }, $thisComments);

            return [
                'id'            => $post->id,
                'title'         => $post->title,
                'author'        => $post->author,
                'content'       => $post->content,
                'contentShort'  => mb_strlen($post->content) > 150 ? mb_substr($post->content, 0, 150) . ' ......' : $post->content,
                'createdAt'     => DateUtil::format($post->createdAt),
                'comments'      => $thisComments,
            ];
        }, $posts);

        $paginationService = new PaginationService($pageNum, self::LIMIT, TBbsPost::getCount());
        $pageNumArray = $paginationService->getPageList();
        $pageLinkArray = array_map(function (int $pageNum) use ($request) {
            //return self::getUrl();
        }, $pageNumArray);

        $paginationData = [
            'pageNum'  => $pageNum,
            'pageList' => $paginationService->getPageList(),
            'pageLinkArray', '',
            'metaText' => $paginationService->getMetaText(),
        ];
        debug($paginationData);

        return view('pages.bbs.index', [
            'posts'          => $viewData,
            'paginationData' => $paginationData,
        ]);
    }

    private static function getUrl(string $prop, string $dir, string $pageNum): string
    {
        return url("bbs/list/$prop/$dir/$pageNum");
    }
}
