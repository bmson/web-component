// Dependencies
import Package from './helpers/package';
import Walker from './nodes/walker';

//
const pkg = new Package('zendesk-editor');

pkg.addEventListener('created', component => {

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

});

//
pkg.register();
