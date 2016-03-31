// Module defenition
export default function () {

  //
  const selection = (this.shadowRoot).getSelection();

  //
  if (selection.rangeCount) {
    return selection.getRangeAt(0);

  } else return

}
