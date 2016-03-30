// Module defenition
export default function (editor) {

  //
  const selection = editor.getSelection();
  const element = document.createElement('zendesk-macro');

  //
  editor.replaceSelection(element);

}
