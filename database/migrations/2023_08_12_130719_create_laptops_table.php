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
        Schema::create('laptops', function (Blueprint $table) {
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
            $table->string('image');
            $table->longText('body');
            $table->boolean('status')->default(true);
            $table->string('chipset');
            $table->string('cpu');
            $table->string('gpu');
            $table->string('ram');
            $table->string('screen');
            $table->string('os');
            $table->string('battery');
            $table->string('weight');
            $table->string('resolution');
            $table->string('type');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('laptops');
    }
};
