export default function (node, shadowRoot) {

  //
  const selection = shadowRoot.getSelection();

  //
  if (selection.rangeCount <= 0)
    return;

  //
  const range = selection.getRangeAt(0);
  const clone = range.cloneRange();

  //
  clone.selectNodeContents(node);
  clone.setEnd(range.endContainer, range.endOffset);

  //
  return clone.toString().length;

}
