//  Create the menu
browser.contextMenus.create(
{
    id: "charactersCounter",
    title: "Characters: ",
    contexts: ["selection"],
}
);

// When the content script sends us a message (with the lenght of the selection), run updateMenu
browser.runtime.onMessage.addListener(updateMenu);

function updateMenu(message){
    // Update the Context Menu with the characters length.
    browser.contextMenus.update("charactersCounter", {
        title: "Characters: " + message.selection,
    })
    // Refresh the context menu to reflect the received data length.
    browser.contextMenus.refresh()
}


