<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TreinoRealizado extends Model
{
    use HasFactory;

    protected $table = 'treinos_realizados';

    protected $fillable = ['treino_id', 'data_execucao', 'duracao_minutos'];

    public function treino()
    {
        return $this->belongsTo(Treinos::class, 'treino_id');
    }

    public function exerciciosRealizados()
    {
        return $this->hasMany(ExerciciosRealizados::class, 'treino_realizado_id');
    }

    // Acessor e Mutator para data_execucao
    protected function dataExecucao(): Attribute
    {
        return new Attribute(
            get: fn ($value) => \Carbon\Carbon::parse($value)->format('d/m/Y H:i'),
            set: fn ($value) => \Carbon\Carbon::createFromFormat('d/m/Y H:i', $value)
        );
    }
}
