<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Cast\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Treinos extends Model
{
    use HasFactory;
    protected $fillable = ['nome', 'cover'];
    protected $appends = ['links'];

    public function treinos()
    {
        return $this->hasMany(Treinos::class, 'treino_id');
    }

    public function exercicios()
    {
        return $this->hasMany(Exercicio::class, Treinos::class);
    }

    protected static function booted()
    {
        self::addGlobalScope('ordered', function (Builder $queryBuilder) {
            $queryBuilder->orderBy('nome');
        });
    }

    public function links(): Attribute
    {
        return new Attribute(
            get: fn () => [
                [
                    'rel' => 'self',
                    'url' => "/api/treinos/{$this->id}"
                ],
                [
                    'rel' => 'treinos',
                    'url' => "/api/treinos/{$this->id}/treinos"
                ],
                [
                    'rel' => 'exercicios',
                    'url' => "/api/treinos/{$this->id}/exercicios"
                ],
            ],
        );
    }
}