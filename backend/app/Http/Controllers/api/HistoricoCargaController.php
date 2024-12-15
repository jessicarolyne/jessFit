<?php

namespace App\Http\api\Controllers;

use App\Models\HistoricoCargas;
use Illuminate\Http\Request;

class HistoricoCargaController extends Controller
{
    public function index($treinoExercicioId)
    {
        return HistoricoCargas::where('treino_exercicio_id', $treinoExercicioId)
            ->orderBy('data_registro', 'asc')
            ->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'treino_exercicio_id' => 'required|exists:treinos_exercicios,treino_exercicio_id',
            'peso' => 'required|numeric|min:0',
            'data_registro' => 'nullable|date',
        ]);

        return HistoricoCargas::create([
            'treino_exercicio_id' => $request->treino_exercicio_id,
            'peso' => $request->peso,
            'data_registro' => $request->data_registro ?? now(),
        ]);
    }
}
