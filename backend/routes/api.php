<?php

use App\Http\Controllers\api\TreinosController;
use App\Http\Controllers\HistoricoCargaController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/treinos', [TreinosController::class, 'index']);
Route::post('/treinos', [TreinosController::class, 'store']);
Route::get('/treinos/{id}', [TreinosController::class, 'show']);
Route::put('/treinos/{id}', [TreinosController::class, 'update']);
Route::delete('/treinos/{id}', [TreinosController::class, 'destroy']);
Route::get('/historico_cargas/{treino_exercicio_id}', [HistoricoCargaController::class, 'index']);
Route::post('/historico_cargas', [HistoricoCargaController::class, 'store']);