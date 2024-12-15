<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ExerciciosRealizados extends Model
{
    use HasFactory;

    // Define a tabela associada, caso o nome não siga o padrão Laravel
    protected $table = 'exercicios_realizados';

    // Campos que podem ser preenchidos em massa
    protected $fillable = [
        'treino_realizado_id',
        'exercicio_id',
        'peso',
        'series',
        'repeticoes',
        'data_registro',
    ];

    public function treinoRealizado()
    {
        return $this->belongsTo(TreinosRealizados::class, 'treino_realizado_id');
    }

    public function exercicio()
    {
        return $this->belongsTo(Exercicios::class, 'exercicio_id');
    }

    protected function dataRegistro(): Attribute
    {
        return new Attribute(
            get: fn ($value) => \Carbon\Carbon::parse($value)->format('d/m/Y H:i'),
            set: fn ($value) => \Carbon\Carbon::createFromFormat('d/m/Y H:i', $value)
        );
    }
}
