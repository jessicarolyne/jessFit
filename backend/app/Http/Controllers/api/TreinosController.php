<?php

namespace App\Http\Controllers\api;

use Illuminate\Http\Request;

class TreinosController extends Controller
{
  public function __construct(private Treins)
    public function index(request $request)
    {
      $treinos = [
        "Bulgaro",
        "Sumo",
        "Leg Press"
      ];
      return $treinos;
    }
}
