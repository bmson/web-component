// Module defenition
export default function (node) {

  //
  const selection = this.getSelection();
  const windowSelection = window.getSelection();

  //
  if (selection) {
    selection.surroundContents(node);

    windowSelection.removeAllRanges();
    windowSelection.addRange(selection);

  } else return;

}
