browser.contextMenus.create(
{
    id: "characters_counter",
    title: "Characters: ",
    contexts: ["selection"],
}
);

browser.runtime.onMessage.addListener(createMenu);

function createMenu(message){
    console.log(message)
    browser.contextMenus.update("characters_counter", {
        title: "Characters: " + message.selection,
    })

}

