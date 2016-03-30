// Module defenition
export default function (editor) {

  //
  const selection = editor.getSelection();
  const ULelement = document.createElement('ol');
  const LIelement = document.createElement('li');

  //
  if (!selection)
    return

  //const children = selection.querySelectorAll(type);
  //console.log(children);

  //
  LIelement.appendChild(selection);
  ULelement.appendChild(LIelement);

  //
  editor.replaceSelection(ULelement);

}
