<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HistoricoCargas extends Model
{
    use HasFactory;

    protected $fillable = ['treino_exercicio_id', 'peso', 'data_registro'];

    public function treinoExercicio()
    {
        return $this->belongsTo(TreinosExercicios::class, 'treino_exercicio_id');
    }
}
