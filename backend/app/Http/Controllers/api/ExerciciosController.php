<?php

namespace App\Http\Controllers;

use App\Models\Exercicios;
use Illuminate\Http\Request;

class ExerciciosController extends Controller
{
    public function index()
    {
        return Exercicios::all();
    }

    public function store(Request $request)
    {
        $request->validate(['nome' => 'required|string|max:256']);
        return Exercicios::create($request->all());
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
