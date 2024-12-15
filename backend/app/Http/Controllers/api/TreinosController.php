<?php

namespace App\Http\Controllers;

use App\Models\Treinos;
use Illuminate\Http\Request;

class TreinosController extends Controller
{
    //Listar todos os treinos de um usuário
    public function index(Request $request)
    {
        $userId = $request->user()->id;

        return Treinos::where('user_id', $userId)
            ->orderBy('criado_em', 'desc')
            ->get();
    }

    //Criar um novo treino
    public function store(Request $request)
    {
        $request->validate([
            'nome' => 'required|string|max:256',
            'user_id' => 'required|exists:users,user_id',
        ]);

        return Treinos::create([
            'nome' => $request->nome,
            'user_id' => $request->user_id,
            'criado_em' => now(),
            'atualizado_em' => now(),
        ]);
    }

    //Exibir detalhes de um treino específico
    public function show($id)
    {
        $treino = Treinos::findOrFail($id);

        // Carregar exercícios associados (opcional)
        $treino->load('treinosExercicios.exercicio');

        return $treino;
    }

    //Atualizar um treino
    public function update(Request $request, $id)
    {
        $treino = Treinos::findOrFail($id);

        $request->validate([
            'nome' => 'sometimes|string|max:256',
        ]);

        $treino->update([
            'nome' => $request->nome ?? $treino->nome,
            'atualizado_em' => now(),
        ]);

        return $treino;
    }

    //Deletar um treino
    public function destroy($id)
    {
        $treino = Treinos::findOrFail($id);
        $treino->delete();

        return response()->noContent();
    }
}
