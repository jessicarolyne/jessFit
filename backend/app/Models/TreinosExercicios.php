<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TreinosExercicios extends Model
{
    use HasFactory;

    protected $fillable = ['treino_id', 'exercicio_id', 'series', 'repeticoes', 'peso', 'observacoes'];

    public function treino()
    {
        return $this->belongsTo(Treinos::class, 'treino_id');
    }

    public function exercicio()
    {
        return $this->belongsTo(Exercicios::class, 'exercicio_id');
    }
}
