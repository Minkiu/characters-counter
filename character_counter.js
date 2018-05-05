window.addEventListener("contextmenu", sendSelection)

function sendSelection(){
    console.log("Hi from the content")
    var selection_length = document.getSelection().toString().length
    browser.runtime.sendMessage({"selection": selection_length});
}