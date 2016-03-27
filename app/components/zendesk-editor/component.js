// Dependencies
import Package from './helpers/package';
import Walker from './nodes/walker';

//
const pkg = new Package('zendesk-editor');

/*
pkg.extend('activate', (component, key, status) => {
});

pkg.extend('addPlugin', (component, fn) => {
  //const manipulation = fn.call(this, selection);
  //selection.replace(manipulation);
});

pkg.addEventListener('created', component => {
});

pkg.register();
*/

//
pkg.register = (component) => {

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
