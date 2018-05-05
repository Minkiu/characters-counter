browser.contextMenus.create(
{
    id: "charactersCounter",
    title: "Characters: ",
    contexts: ["selection"],
}
);

browser.runtime.onMessage.addListener(createMenu);

function createMenu(message){
    browser.contextMenus.update("charactersCounter", {
        title: "Characters: " + message.selection,
    })

}

