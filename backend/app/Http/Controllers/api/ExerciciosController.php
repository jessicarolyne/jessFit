<?php

namespace App\Http\Controllers\api;

use App\Models\Exercicios;
use Illuminate\Http\Request;
use App\Http\Requests\ExerciciosFormRequest;

class ExerciciosController extends Controller
{
    public function index()
    {
        return Exercicios::all();
    }

    public function store(ExerciciosFormRequest $request)
    {
        $exercicio = Exercicios::create($request->validated());
        return response()->json($exercicio, 201);
    }

    public function update(Request $request, $id)
    {
        $exercicio = Exercicios::findOrFail($id);
        $request->validate(['nome' => 'required|string|max:256']);
        $exercicio->update($request->all());
        return $exercicio;
    }

    public function destroy($id)
    {
        $exercicio = Exercicios::findOrFail($id);
        $exercicio->delete();
        return response()->noContent();
    }
}
