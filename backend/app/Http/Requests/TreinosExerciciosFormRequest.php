<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TreinosExerciciosFormRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'treino_id' => ['required', 'exists:treinos,treino_id'],
            'exercicio_id' => ['required', 'exists:exercicios,exercicio_id'],
            'series' => ['required', 'integer', 'min:1'],
            'repeticoes' => ['required', 'integer', 'min:1'],
            'peso' => ['nullable', 'numeric', 'min:0'],
            'observacoes' => ['nullable', 'string', 'max:255'],
        ];
    }
}
