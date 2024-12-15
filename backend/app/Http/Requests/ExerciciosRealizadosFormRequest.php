<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ExerciciosRealizadosFormRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'treino_realizado_id' => ['required', 'exists:treinos_realizados,treino_realizado_id'],
            'exercicio_id' => ['required', 'exists:exercicios,exercicio_id'],
            'peso' => ['nullable', 'numeric', 'min:0'],
            'series' => ['required', 'integer', 'min:1'],
            'repeticoes' => ['required', 'integer', 'min:1'],
            'data_registro' => ['required', 'date'],
        ];
    }
}
