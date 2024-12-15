<?php

namespace App\Http\Controllers\api;

use App\Models\ExerciciosRealizados;
use App\Http\Requests\ExerciciosRealizadosFormRequest;

class ExerciciosRealizadosController extends Controller
{
    public function index()
    {
        $exerciciosRealizados = ExerciciosRealizados::with(['treinoRealizado', 'exercicio'])->get();
        return response()->json($exerciciosRealizados);
    }

    public function store(ExerciciosRealizadosFormRequest $request)
    {
        $exercicioRealizado = ExerciciosRealizados::create($request->validated());
        return response()->json($exercicioRealizado, 201);
    }

    public function show($id)
    {
        $exercicioRealizado = ExerciciosRealizados::with(['treinoRealizado', 'exercicio'])->findOrFail($id);
        return response()->json($exercicioRealizado);
    }

    public function update(ExerciciosRealizadosFormRequest $request, $id)
    {
        $exercicioRealizado = ExerciciosRealizados::findOrFail($id);
        $exercicioRealizado->update($request->validated());
        return response()->json($exercicioRealizado);
    }

    public function destroy($id)
    {
        $exercicioRealizado = ExerciciosRealizados::findOrFail($id);
        $exercicioRealizado->delete();
        return response()->json(['message' => 'Exercício realizado removido com sucesso.']);
    }
}
