<?php
namespace App\Repositories;

use App\Http\Request\TreinosFormRequest;
use App\Models\Treinos;

interface TreinosRepository
{
    public function add(TreinosFormRequest $request): Treinos;
}