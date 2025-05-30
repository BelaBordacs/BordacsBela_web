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
        Schema::create('szavaks', function (Blueprint $table) {
            $table->id();
            $table->string("angol");
            $table->string("magyar");
            $table->foreignId("temaId")->references("id")->on("temas");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('szavaks');
    }
};
