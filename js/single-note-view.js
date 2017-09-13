(function(exports) {


  var SingleNoteView = function (note) {
    // takes note model as a parameter
    this.singleNote = note

  };

  SingleNoteView.prototype.getOneNote = function () {
    return "<div>" + this.singleNote.getText() + "</div>"
  }


  exports.SingleNoteView = SingleNoteView;

})(this);
