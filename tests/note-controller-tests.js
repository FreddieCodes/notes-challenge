
(function(exports) {
  function testNoteController() {

    var list = new NoteList();
    var controller = new NoteController(list);

    var doc = new DocumentDouble();
    controller.changeView(doc)

    var origString = "Favourite drink: seltzer"
    var shortString = origString.slice(0,20)
    console.log(origString)
    console.log(shortString)
    
    pass = doc.tags['app'].innerHTML === "<li>" + shortString + "</li>"
    formatOutput('testNoteControllerChangesInnerHTML', pass)
  };

  testNoteController();
})(this);
