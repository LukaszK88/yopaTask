<?php

namespace App\Http\Controllers;

use App\Note;
use App\SubNote;
use Carbon\Carbon;
use Illuminate\Http\Request;

class NotesController extends ApiController
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $notes = Note::with(Note::REL_SUB_NOTES, Note::REL_USER)->get();

        return $this->respond($notes);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->all();

        $newNote = Note::create([
            Note::COL_TITLE => $data['title'],
            Note::COL_USER_ID => $data['user_id']
        ]);

        if($data['body'] && $newNote){
            SubNote::create([
                SubNote::COL_BODY => $data['body'],
                SubNote::COL_NOTE_ID => $newNote->id,
                SubNote::COL_USER_ID => $data['user_id'],
            ]);
        }

        $note = Note::with(Note::REL_SUB_NOTES, Note::REL_USER)->find($newNote->id);

        return $this->respond($note);

    }

    public function storeSubNote(Request $request)
    {
        $data = $request->all();

        $subNote = SubNote::create($data);

        return $this->respond($subNote);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $note = Note::with(Note::RREL_SUB_NOTES_USER)->find($id);

        return $this->respond($note);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
