// Module defenition
export default function (editor) {

  //
  const selection = editor.getSelection();

  //
  const element = document.createElement('zendesk-macro');

  //
  if (selection) {
    selection.deleteContents();
    selection.insertNode(element);
  }

}
