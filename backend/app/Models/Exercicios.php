<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Exercicios extends Model
{
    use HasFactory;

    protected $fillable = ['nome'];

    public function treinosExercicios()
    {
        return $this->hasMany(TreinosExercicios::class, 'exercicio_id');
    }

    public function exerciciosRealizados()
    {
        return $this->hasMany(ExerciciosRealizados::class, 'exercicio_id');
    }
}
