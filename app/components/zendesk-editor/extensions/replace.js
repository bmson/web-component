// Module defenition
export default function (node) {

  //
  const selection = (this.shadowRoot).getSelection();

  //
  if (!selection.rangeCount)
    return;

  //
  const range = selection.getRangeAt(0);

  //
  range.deleteContents();
  range.insertNode(node);

}
