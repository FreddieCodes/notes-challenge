
(function(exports) {
  function testThatNoteViewWorks() {

    var text = "Note 1 should not show than 20 characters";
    var text2 = "Note 2 should not show than 20 characters";


    var list = new NoteList();
    list.addNote(text);
    list.addNote(text2);

    var view = new NoteListView (list)

    // for (var i = 0; i < array.length; i++) {
    //   array[i]
    // }
    pass = view.getNotesView() === "<li><a href=#0>" + text.slice(0,20) + "</a></li><li><a href=#1>" + text2.slice(0,20) + "</a></li>"
    formatOutput('testThatNoteViewWorks', pass)
  };

  testThatNoteViewWorks();
})(this);
