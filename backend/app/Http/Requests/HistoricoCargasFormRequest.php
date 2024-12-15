<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class HistoricoCargasFormRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'treino_exercicio_id' => ['required', 'exists:treinos_exercicios,treino_exercicio_id'],
            'peso' => ['required', 'numeric', 'min:0'],
            'data_registro' => ['required', 'date'],
        ];
    }
}
