

// module for 'Note'
(function(exports) {
  // n is global
  var n = 0
  // constructor
  var Note = function (text) {
    this.text = text;
    this.id = n;
    n += 1;
  };

  // returns text property
  Note.prototype.getText = function () {
    return this.text;
  };

  // allows 'Note' to be used globally
  exports.Note = Note;

})(this);
