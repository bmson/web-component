// Module defenition
export default function (node) {

  //
  const selection = this.getSelection();

var winSelect = window.getSelection();

  //
  if (selection) {
    selection.surroundContents(node);

    winSelect.removeAllRanges();
    winSelect.addRange(selection);

  } else return;

}
