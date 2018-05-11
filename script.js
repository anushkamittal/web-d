//var setting = document.body;
//setting.style.color="red";

var selection = window.getSelection();
var range = selection.getRangeAt(0);
var newnode = document.createElement("span");
newnode.setAttribute("style", "background-color : red");
range.surroundContents(newnode);
