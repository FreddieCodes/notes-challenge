window.onload = function (){

  var btn = document.getElementById("btn");
  // var notes = []

  btn.addEventListener("click", function(){
    var htmlNote = document.getElementById("noteForm").value;
    console.log(htmlNote);
    console.log(noteList);
    noteList.addNote(htmlNote);
    controller.changeView();
    // notes.push(newNote)
  })

}
