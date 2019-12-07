<?php

namespace App\Http\Controllers\Bbs;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class EditAuthController extends Controller
{
    private $bbsPostId;

    public function __invoke(Request $request)
    {
        $this->bbsPostId = $request->input('bbsPostId');
        $password  = $request->input('password');

        $passwordHash = $this->getPasswordHash();
        if (password_verify($password, $passwordHash)) {
            session()->put('editBbsPostId', $this->bbsPostId);
            return response()->json([
                'nextUrl' => url('bbs/edit/' . $this->bbsPostId),
            ]);
        } else {
            abort(401);
        }
    }

    private function getPasswordHash(): ?string
    {
        $data = DB::table('t_bbs_post')
            ->select([
                'password'
            ])
            ->where('id', '=', $this->bbsPostId)
            ->first();

        return $data === null ? null : $data->password ?? null;
    }
}
