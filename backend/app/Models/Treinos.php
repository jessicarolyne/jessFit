<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Cast\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Treinos extends Model
{
    use HasFactory;

    // Campos permitidos para preenchimento
    protected $fillable = ['nome', 'user_id', 'finalizado_em'];

    // Campos adicionais (acessores)
    protected $appends = ['links'];

    public function exercicios()
    {
        return $this->hasMany(TreinosExercicios::class, 'treino_id');
    }

    public function treinosRealizados()
    {
        return $this->hasMany(TreinosRealizados::class, 'treino_id');
    }

    protected static function booted()
    {
        self::addGlobalScope('ordered', function (Builder $queryBuilder) {
            $queryBuilder->orderBy('nome');
        });
    }

    /**
     * Acessor para os links relacionados ao treino
     */
    public function links(): Attribute
    {
        return new Attribute(
            get: fn () => [
                [
                    'rel' => 'self',
                    'url' => "/api/treinos/{$this->id}",
                ],
                [
                    'rel' => 'exercicios',
                    'url' => "/api/treinos/{$this->id}/exercicios",
                ],
                [
                    'rel' => 'treinos_realizados',
                    'url' => "/api/treinos/{$this->id}/treinos_realizados",
                ],
            ],
        );
    }
}
