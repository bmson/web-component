// Module defenition
export default function (node) {

  //
  const selection = window.getSelection();
  const range = selection.getRangeAt(0);

  //
  range.deleteContents();
  range.insertNode(node);

}
