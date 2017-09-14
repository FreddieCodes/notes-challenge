(function(exports) {

  function testNoteObjectId() {
    noteList = new NoteList()
    noteList.addNote("message")
    noteList.addNote("whatever")
    pass = noteList.notes[0].id === 0;
    // console.log(note.id)
    formatOutput('testNoteObjectIdIsZero', pass)
    pass = noteList.notes[1].id === 1;
    formatOutput('testNoteObjectIsOne', pass)
  };
  testNoteObjectId();

  function testThatItReturnsTheNoteMessage() {
    var text = "Hello Adam!"
    var note = new Note(text);

    pass = note.getText() === text
    formatOutput('testThatItReturnsTheNoteMessage', pass)
  };

  testThatItReturnsTheNoteMessage();
})(this);
