

// module for 'Note'
(function(exports) {

  // constructor
  var Note = function (text, id) {
    this.text = text;
    this.id = id;
  };

  // returns text property
  Note.prototype.getText = function () {
    return this.text;
  };

  // allows 'Note' to be used globally
  exports.Note = Note;

})(this);
