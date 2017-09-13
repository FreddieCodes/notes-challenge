
(function(exports) {
  function testThatNoteViewWorks() {

    var text = "Note 1 should not show than 20 characters";
    var text2 = "Note 2 should not show than 20 characters";


    var list = new NoteList();
    list.addNote(text);
    list.addNote(text2);

    var view = new NoteListView (list)
    // slice 0,20 so it doesn't show more than 20 characters
    pass = view.getNotesView() === "<li>" + text.slice(0,20) + "</li><li>" + text2.slice(0,20) + "</li>"
    formatOutput('testThatNoteViewWorks', pass)
  };

  testThatNoteViewWorks();
})(this);
