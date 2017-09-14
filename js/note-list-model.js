

// module for 'Note'
(function(exports) {

  // constructor, takes class type of note
  var NoteList = function () {
    this.notes = [];
    this.id = 0
  };

  // creates a new note and adds it to array
  NoteList.prototype.addNote = function (text) {
    var newNote = new Note(text, this.id)
    this.notes.push(newNote);
    this.id += 1
  };

  NoteList.prototype.getNotes = function () {
    return this.notes;
  }

  // allows 'NoteList' to be used globally
  exports.NoteList = NoteList;

})(this);
