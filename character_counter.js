window.addEventListener("contextmenu", sendSelection)

function sendSelection(){
    var selectionLength = document.getSelection().toString().length
    browser.runtime.sendMessage({"selection": selectionLength});
}