var contextMenu = require("sdk/context-menu");

var menuItem = contextMenu.Item({
  label: "Characters: ",
  context: contextMenu.SelectionContext(),
  contentScript: 'self.on("context", function () {' +
                 '  var text = window.getSelection().toString().length;' +
                 '  return "Characters: " + text;' +
                 '});'
});