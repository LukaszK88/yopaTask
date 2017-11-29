<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Note extends Model
{
    protected $table = 'notes';

    const   COL_ID = 'id',
        COL_TITLE = 'title',
        COL_USER_ID = 'user_id';

    const REL_SUB_NOTES = 'subNotes',
        REL_USER = 'user';

    const RREL_SUB_NOTES_USER = self::REL_SUB_NOTES.'.'.self::REL_USER;

    protected $fillable=[
        self::COL_USER_ID,
        self::COL_TITLE,
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function subNotes()
    {
        return $this->hasMany(SubNote::class);
    }
}
