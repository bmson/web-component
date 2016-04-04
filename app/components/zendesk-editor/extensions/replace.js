// Module defenition
export default function (node) {

  //
  const shadowRoot = this.shadowRoot;

  //
  const windowSelection = shadowRoot.getSelection();
  const selection = windowSelection.getRangeAt(0);

  //
  if (selection) {
    selection.surroundContents(node);

    windowSelection.removeAllRanges();
    windowSelection.addRange(selection);

  } else return;

}
