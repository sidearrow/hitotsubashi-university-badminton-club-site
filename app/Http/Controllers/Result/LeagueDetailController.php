<?php

namespace App\Http\Controllers\Result;

use App\Http\Controllers\Controller;
use Illuminate\Database\Query\JoinClause;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class LeagueDetailController extends Controller
{
    public function __invoke(Request $request)
    {
        $leagueId = $request->route('leagueId');

        $data = $this->getData($leagueId);

        return view('pages.result.league_detail', [
            'data' => $data,
        ]);
    }

    private function getData(string $leagueId)
    {
        return [
            'title'       => $this->getTitle($leagueId),
            'callageList' => $this->getCallageList($leagueId),
            'rank'        => $this->getRank($leagueId),
            'result'      => $this->getResult($leagueId),
            'detail'      => $this->getDetail($leagueId),
        ];
    }

    private function getTitle(string $leagueId): string
    {
        return DB::table('result_league')
            ->select(['title'])
            ->where('league_id', '=', $leagueId)
            ->first()
            ->title ?? '';
    }

    private function getCallageList(string $leagueId): array
    {
        return array_map(
            function ($v) {
                return $v->team_name;
            },
            DB::table('result_league_combination')
                ->select(['team_name'])
                ->where('league_id', '=', $leagueId)
                ->orderBy('team_id')
                ->get()
                ->toArray()
        );
    }

    private function getRank(string $leagueId): array
    {
        return array_map(
            function ($v) {
                return [
                    'rank'        => $v->rank,
                    'callageName' => $v->team_name,
                    'winMatches'  => $v->win_num,
                    'loseMatches' => $v->lose_num,
                ];
            },
            DB::table('result_league_combination')
                ->select([
                    'team_name',
                    'rank',
                    'win_num',
                    'lose_num',
                ])
                ->where('league_id', '=', $leagueId)
                ->orderBy('rank')
                ->get()
                ->toArray()
        );
    }

    private function getResult(string $leagueId): array
    {
        return array_map(
            function ($v) {
                return [
                    $v->t1_win_flg === null ? '-' : $v->t1_win_num . ($v->t1_win_flg === '1' ? ' ○ ' : ' × ') . $v->t1_lose_num,
                    $v->t2_win_flg === null ? '-' : $v->t2_win_num . ($v->t2_win_flg === '1' ? ' ○ ' : ' × ') . $v->t2_lose_num,
                    $v->t3_win_flg === null ? '-' : $v->t3_win_num . ($v->t3_win_flg === '1' ? ' ○ ' : ' × ') . $v->t3_lose_num,
                    $v->t4_win_flg === null ? '-' : $v->t4_win_num . ($v->t4_win_flg === '1' ? ' ○ ' : ' × ') . $v->t4_lose_num,
                    $v->t5_win_flg === null ? '-' : $v->t5_win_num . ($v->t5_win_flg === '1' ? ' ○ ' : ' × ') . $v->t5_lose_num,
                    $v->t6_win_flg === null ? '-' : $v->t6_win_num . ($v->t6_win_flg === '1' ? ' ○ ' : ' × ') . $v->t6_lose_num,
                ];
            },
            DB::table('result_league_combination')
                ->select([
                    'rank',
                    't1_win_flg',
                    't1_win_num',
                    't1_lose_num',
                    't2_win_flg',
                    't2_win_num',
                    't2_lose_num',
                    't3_win_flg',
                    't3_win_num',
                    't3_lose_num',
                    't4_win_flg',
                    't4_win_num',
                    't4_lose_num',
                    't5_win_flg',
                    't5_win_num',
                    't5_lose_num',
                    't6_win_flg',
                    't6_win_num',
                    't6_lose_num',
                ])
                ->where('league_id', '=', $leagueId)
                ->orderBy('team_id')
                ->get()
                ->toArray()
        );
    }

    private function getDetail(string $leagueId): array
    {
        return array_values(array_reduce(
            DB::table('result_league_game_detail as rlgd')
                ->select([
                    'rlgd.*',
                    'rlc.team_name',
                ])
                ->leftJoin('result_league_combination as rlc', function (JoinClause $q) {
                    $q->on('rlc.league_id', '=', 'rlgd.league_id');
                    $q->on('rlc.match_no', '=', 'rlgd.team_match_id');
                })
                ->where('rlgd.league_id', '=', $leagueId)
                ->orderBy('team_match_id')
                ->orderBy('match_id')
                ->get()
                ->toArray(),
            function (array $res, $v) {
                $res[$v->team_match_id]['matches'][] = [
                    'player' => $v->player_name_a2 === null ? [$v->player_name_a1] : [$v->player_name_a1, $v->player_name_a2],
                    'get'    => $v->win_set,
                    'lose'   => $v->lose_set,
                    'sets'   => array_filter([
                        [$v->score1_a, $v->score1_b],
                        [$v->score2_a, $v->score2_b],
                        [$v->score3_a, $v->score3_b],
                    ], function ($v) {
                        return $v[0] !== null;
                    })
                ];

                $res[$v->team_match_id]['title'] = $res[$v->team_match_id]['title'] ?? '.vs ' . $v->team_name;

                return $res;
            },
            []
        ));
    }
}
