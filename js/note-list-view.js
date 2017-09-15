
(function(exports) {


  var NoteListView = function (noteList) {
    this.noteList = noteList
  };



  NoteListView.prototype.getNotesView = function () {
    string = ""

    for (var i = 0; i < this.noteList.notes.length; i++) {
      console.log(this.noteList.notes[i].id)
      string += "<li><a href=#"+ this.noteList.notes[i].id +">" + this.noteList.notes[i].getText().slice(0,20) + "</a></li>"
        // + this.noteList.notes[i].id +
    }


    return string;
  }

  // allows 'NoteList' to be used globally
  exports.NoteListView = NoteListView;

})(this);
