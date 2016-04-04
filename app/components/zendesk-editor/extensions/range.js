// Module defenition
export default function () {

  //
  const shadowRoot = this.shadowRoot;

  //
  const selection = shadowRoot.getSelection();

  //
  if (selection.rangeCount) {
    return selection.getRangeAt(0);

  } else return

}
