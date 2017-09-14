(function(exports) {

  function testNoteObjectId() {

    var note = new Note("message");
    var note2 = new Note("whatever");
    pass = note.id === 0;
    console.log(note.id)
    formatOutput('testNoteObjectIdIsZero', pass)
    pass = note2.id === 1;
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
