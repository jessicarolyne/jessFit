<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TreinosRealizadosFormRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'treino_id' => ['required', 'exists:treinos,treino_id'],
            'data_execucao' => ['required', 'date'],
            'duracao_minutos' => ['nullable', 'integer', 'min:1'],
        ];
    }
}
