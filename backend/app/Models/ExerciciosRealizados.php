<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TreinosRealizados extends Model
{
    use HasFactory;

    protected $fillable = ['treino_id', 'data_execucao', 'duracao_minutos'];

    public function treino()
    {
        return $this->belongsTo(Treinos::class, 'treino_id');
    }

    public function exerciciosRealizados()
    {
        return $this->hasMany(ExerciciosRealizados::class, 'treino_realizado_id');
    }
}
