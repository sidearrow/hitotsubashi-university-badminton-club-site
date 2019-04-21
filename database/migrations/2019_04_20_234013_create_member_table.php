<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMemberTable extends Migration
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
            $table->string('first_name', 20);
            $table->string('last_name', 20);
            $table->string('faculty', 10);
            $table->string('highschool', 10);
            $table->string('position', 100);
            $table->string('file_name', 20);
            $table->string('comment', 200)->nullable();
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
