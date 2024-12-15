<?php

namespace App\Http\Controllers\api;

use App\Models\TreinosExercicios;
use App\Http\Requests\TreinosExerciciosFormRequest;

class TreinosExerciciosController extends Controller
{
    public function index()
    {
        $treinosExercicios = TreinosExercicios::with(['treino', 'exercicio'])->get();
        return response()->json($treinosExercicios);
    }

    public function store(TreinosExerciciosFormRequest $request)
    {
        $treinoExercicio = TreinosExercicios::create($request->validated());
        return response()->json($treinoExercicio, 201);
    }

    public function show($id)
    {
        $treinoExercicio = TreinosExercicios::with(['treino', 'exercicio'])->findOrFail($id);
        return response()->json($treinoExercicio);
    }

    public function update(TreinosExerciciosFormRequest $request, $id)
    {
        $treinoExercicio = TreinosExercicios::findOrFail($id);
        $treinoExercicio->update($request->validated());
        return response()->json($treinoExercicio);
    }

    public function destroy($id)
    {
        $treinoExercicio = TreinosExercicios::findOrFail($id);
        $treinoExercicio->delete();
        return response()->json(['message' => 'Treino-exercício removido com sucesso.']);
    }
}
