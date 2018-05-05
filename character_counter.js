// Add an event trigger when we right-click to run sendSelection
document.addEventListener("contextmenu", sendSelection)

function sendSelection(){
    // Grab the lenght of the current selected text and send it to the background script
    var selectionLength = document.getSelection().toString().length
    browser.runtime.sendMessage({"selection": selectionLength});
}