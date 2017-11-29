<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SubNote extends Model
{
    protected $table = 'sub_notes';

    const   COL_ID = 'id',
        COL_BODY = 'body',
        COL_NOTE_ID = 'note_id',
        COL_USER_ID = 'user_id';

    protected $fillable=[
        self::COL_NOTE_ID,
        self::COL_USER_ID,
        self::COL_BODY,
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function note()
    {
        return $this->belongsTo(Note::class);
    }
}
