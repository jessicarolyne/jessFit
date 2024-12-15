<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Models\TreinosExercicios;

class TreinosFormRequest extends FormRequest
{
    /**
     * @return bool
     */
    public function authorize()
    {
        // Permite que todos os usuários autenticados usem este FormRequest
        return auth()->check();
    }

    /**
     * @return array
     */
    public function rules()
    {
        $rules = [
            'nome' => ['required', 'string', 'min:2', 'max:255'],
        ];

        // Regras adicionais dependendo do tipo de requisição (store ou update)
        if ($this->isMethod('post')) {
            // Regras específicas para criação
            $rules['user_id'] = ['exists:users,id']; // Valida se o user_id existe
        }

        return $rules;
    }

    /**
     * @return array
     */
    public function messages()
    {
        return [
            'nome.required' => 'O nome do treino é obrigatório.',
            'nome.min' => 'O nome deve ter no mínimo :min caracteres.',
            'nome.max' => 'O nome não pode exceder :max caracteres.',
            'user_id.exists' => 'O ID do usuário não é válido.',
        ];
    }

    public function withValidator($validator)
    {
        $validator->after(function ($validator) {
            if ($this->treino_id && $this->exercicio_id) {
                $exists = TreinosExercicios::where('treino_id', $this->treino_id)
                    ->where('exercicio_id', $this->exercicio_id)
                    ->exists();

                if ($exists) {
                    $validator->errors()->add('exercicio_id', 'Este exercício já está atribuído a este treino.');
                }
            }
        });
    }
}
