<?php

namespace App\Http\Controllers\api;

use App\Models\TreinosRealizados;
use Illuminate\Http\Request;

class TreinosRealizadosController extends Controller
{
    public function index()
    {
        $treinosRealizados = TreinosRealizados::with(['treino', 'exerciciosRealizados'])->get();
        return response()->json($treinosRealizados);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'treino_id' => 'required|exists:treinos,treino_id',
            'data_execucao' => 'required|date',
            'duracao_minutos' => 'required|integer|min:1',
        ]);

        $treinoRealizado = TreinosRealizados::create($validated);
        return response()->json($treinoRealizado, 201);
    }

    public function show($id)
    {
        $treinoRealizado = TreinosRealizados::with(['treino', 'exerciciosRealizados'])->findOrFail($id);
        return response()->json($treinoRealizado);
    }

    public function update(Request $request, $id)
    {
        $treinoRealizado = TreinosRealizados::findOrFail($id);

        $validated = $request->validate([
            'data_execucao' => 'date',
            'duracao_minutos' => 'integer|min:1',
        ]);

        $treinoRealizado->update($validated);
        return response()->json($treinoRealizado);
    }

    public function destroy($id)
    {
        $treinoRealizado = TreinosRealizados::findOrFail($id);
        $treinoRealizado->delete();
        return response()->json(['message' => 'Treino realizado removido com sucesso.']);
    }
}
