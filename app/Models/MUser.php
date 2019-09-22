<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class MUser extends Authenticatable
{
    use Notifiable;

    protected $table = 'm_user';
}
