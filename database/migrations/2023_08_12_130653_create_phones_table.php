<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('phones', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->unsigned();
            $table->foreign('user_id')->references('id')->on('users')->onUpdate('cascade')->onDelete('cascade');
            $table->string('name');
            $table->string('slug');
            $table->string('brand');
            $table->string('model');
            $table->integer('storage');
            $table->double('price');
            $table->date('release_date');
            $table->string('color');
            $table->string('os');
            $table->string('network');
            $table->string('sim');
            $table->string('display');
            $table->string('cpu');
            $table->string('gpu');
            $table->string('ram');
            $table->string('battery');
            $table->string('camera');
            $table->string('chipset');
            $table->longText('body');
            $table->string('images');
            $table->string('size');
            $table->string('weight');
            $table->string('status')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('phones');
    }
};
