<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Phone extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function product()
    {
        return $this->morphOne(Product::class, 'productable');
    }
}
