<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Kembali extends Model
{
    protected $table = 'kembali';
    protected $fillable = ['id_pinjam', 'tgl_kembali', 'denda'];
}
