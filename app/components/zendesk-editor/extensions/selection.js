// Module defenition
export default function () {

  //
  const selection = window.getSelection();

  //
  if (selection.isCollapsed)
    return;

  //
  const range = selection.getRangeAt(0);
  const content = range.cloneContents();
  const docFragment = document.createDocumentFragment();

  //
  docFragment.appendChild(content);

  //
  return docFragment;

}
