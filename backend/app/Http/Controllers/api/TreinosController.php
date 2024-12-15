<?php

namespace App\Http\Controllers\api;

use App\Models\Treinos;
use Illuminate\Http\Request;
use App\Http\Requests\TreinosFormRequest;
class TreinosController extends Controller
{
    //Listar todos os treinos de um usuário
    public function index(TreinosFormRequest $request)
    {
        // Supõe que há um relacionamento entre treinos e usuários (user_id)
        $user = $request->user(); // Obtém o usuário autenticado

        // Lista apenas os treinos do usuário autenticado
        $treinos = Treinos::where('user_id', $user->id)
            ->with('exercicios') // Carrega exercícios associados, se necessário
            ->get();

        return response()->json($treinos);
    }

    public function store(TreinosFormRequest $request)
    {
        $user = $request->user(); // Obtém o usuário autenticado

        // Cria um novo treino associado ao usuário
        $treino = Treinos::create([
            'nome' => $request->validated('nome'), // Valida automaticamente
            'user_id' => $user->id,
        ]);

        return response()->json($treino, 201); // Retorna o treino criado com status 201
    }

    public function show(TreinosFormRequest $request, $id)
    {
        $user = $request->user();

        // Retorna apenas um treino que pertence ao usuário autenticado
        $treino = Treinos::where('id', $id)
            ->where('user_id', $user->id)
            ->with('exercicios') // Carrega exercícios associados
            ->firstOrFail();

        return response()->json($treino);
    }

    public function update(TreinosFormRequest $request, $id)
    {
        $user = $request->user();

        // Atualiza apenas um treino que pertence ao usuário autenticado
        $treino = Treinos::where('id', $id)
            ->where('user_id', $user->id)
            ->firstOrFail();

        $treino->update($request->validated()); // Usa os dados validados

        return response()->json($treino); // Retorna o treino atualizado
    }

    public function destroy(TreinosFormRequest $request, $id)
    {
        $user = $request->user();

        // Deleta apenas um treino que pertence ao usuário autenticado
        $treino = Treinos::where('id', $id)
            ->where('user_id', $user->id)
            ->firstOrFail();

        $treino->delete();

        return response()->json(['message' => 'Treino removido com sucesso!']);
    }
}
