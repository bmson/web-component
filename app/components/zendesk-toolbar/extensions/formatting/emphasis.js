// Module defenition
export default function (editor) {

  //
  const selection = editor.getSelection();
  const element = document.createElement('em');

  //
  if (!selection)
    return

  //const children = selection.querySelectorAll(type);
  //console.log(children);

  //
  element.appendChild(selection);

  //
  editor.replaceSelection(element);

}