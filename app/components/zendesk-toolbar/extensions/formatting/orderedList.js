// Module defenition
export default function (editor) {

  //
  const ULelement = document.createElement('ol');
  const LIelement = document.createElement('li');

  //
  editor.replaceSelection(LIelement);
  editor.replaceSelection(ULelement);

}
