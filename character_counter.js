// Add an event trigger when we right-click to run sendSelection
window.addEventListener("contextmenu", sendSelection)

function sendSelection(){
    // Grab the lenght of the current selected text and send it to the background script
    var selectionLength = window.getSelection().toString().length
    browser.runtime.sendMessage({"selection": selectionLength});
}