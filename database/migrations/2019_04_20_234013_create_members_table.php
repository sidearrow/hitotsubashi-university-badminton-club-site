<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMembersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('members', function (Blueprint $table) {
            $table->increments('id');
            $table->smallInteger('admission_year');
            $table->string('last_name', 10);
            $table->string('first_name', 10);
            $table->string('sx', 1);
            $table->string('faculty', 4);
            $table->string('highschool', 20);
            $table->string('highschool_prefecture', 5);
            $table->string('position', 50)->nullable();
            $table->string('comment', 200)->nullable();
            $table->string('file_name', 20);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('member');
    }
}
