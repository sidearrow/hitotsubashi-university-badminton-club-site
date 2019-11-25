<?php

namespace App\Models;

use App\Enums\DirectionEnum;
use App\Traits\GetterTrait;
use Illuminate\Support\Facades\DB;

/**
 * @property string      $id
 * @property string      $title
 * @property string      $author
 * @property string      $content
 * @property string|null $parentId
 * @property string      $createdAt
 */
class TBbsPost
{
    private $id;
    private $title;
    private $author;
    private $content;
    private $parentId;
    private $createdAt;

    use GetterTrait;

    private function __construct(\stdClass $record)
    {
        $this->id        = $record->id;
        $this->title     = $record->title;
        $this->author    = $record->author;
        $this->content   = $record->content;
        $this->parentId  = $record->parent_id;
        $this->createdAt = $record->created_at;
    }

    /**
     * @return TBbsPost[]
     */
    public static function getPosts(int $limit, int $offset, string $orderColumn, DirectionEnum $dir): array
    {
        $records = DB::table('t_bbs_post')
            ->select()
            ->limit($limit)
            ->offset($offset)
            ->orderBy($orderColumn, $dir->toString())
            ->get()
            ->toArray();

        $res = array_map(function ($record) {
            return new self($record);
        }, $records);

        return $res;
    }

    /**
     * @return TBbsPost[]
     */
    public static function getCommentsByIdArray(array $idArray): array
    {
        $records = DB::table('t_bbs_post')
            ->select()
            ->whereIn('parent_id', $idArray)
            ->get()
            ->toArray();

        $res = array_map(function ($record) {
            return new self($record);
        }, $records);

        return $res;
    }

    public static function getCount(): int
    {
        return DB::table('t_bbs_post')->count();
    }
}
