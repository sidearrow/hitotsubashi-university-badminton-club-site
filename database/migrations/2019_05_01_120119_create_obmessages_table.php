<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateObmessagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('obmessages', function (Blueprint $table) {
            $table->increments('id');
            $table->string('year', 4);
            $table->smallInteger('year_index');
            $table->string('name', 10);
            $table->string('filename', 30);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('obmessages');
    }
}
