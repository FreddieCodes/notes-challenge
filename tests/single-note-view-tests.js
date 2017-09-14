(function(exports) {
  function testSingleNoteView() {

    var text = "Note 1";
    var note = new Note(text);
    var noteOne = new SingleNoteView(note)

    pass = noteOne.getOneNote() === "<div>Note 1</div>"
    formatOutput('testSingleNoteViewChangesInnerHTML', pass)
  };
  //
  testSingleNoteView();
})(this);
