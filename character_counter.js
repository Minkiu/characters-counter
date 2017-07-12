
browser.contextMenus.create({
  id: "character-counter",
  title: "Characters: Fuck me",
  contexts: ["selection"],
});


function countCharacters(e) {
  var text = window.getSelection().toString().length;

  browser.contextMenus.update("character-counter", {
    title: "Characters: "+text,
  });


}



document.addEventListener("contextmenu", countCharacters);
