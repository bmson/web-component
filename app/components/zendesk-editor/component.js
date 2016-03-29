// Dependencies
import Package from '@bmson/package';
import Worker from '@bmson/worker';
import Walker from '@bmson/walker';

//
const onCreated = component => {

  //
  const content = component.getElementById('content');

  //
  [...component.childNodes].forEach(node => {
    content.appendChild(node);
  });

  //
  content.setAttribute('contentEditable', true);

  //
  const toolbar = document.querySelector(`[for=${component.attributes.id}]`);

  //
  const walker = new Walker(content);

  walker.addEventListener('match', e => {
    toolbar.activate(e.detail.nodeType, e.detail.status);
  });

};

const getSelection = (component) => {

  //
  const selection = window.getSelection();
  const range = selection.getRangeAt(0);
  const content = range.cloneContents();
  const docFragment = document.createDocumentFragment();

  //
  docFragment.appendChild(content);

  //
  return docFragment;

}

const replaceSelection = (component, node) => {

  //
  const selection = window.getSelection();
  const range = selection.getRangeAt(0);

  //
  range.deleteContents();
  range.insertNode(node);

};

//
const pkg = new Package('zendesk-editor');

//pkg.stylesheet('./component.css');
pkg.addEventListener('created', onCreated);
pkg.register({
  'getSelection': getSelection,
  'replaceSelection': replaceSelection
});
