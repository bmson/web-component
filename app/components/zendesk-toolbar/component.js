// Global dependencies
import Package from '@bmson/package';

// Local dependencies
import focus from './extensions/focus';
import strong from './extensions/formatting/strong';
import emphasis from './extensions/formatting/emphasis';
import orderedList from './extensions/formatting/orderedList';
import code from './extensions/formatting/code';

//
const onAttached = (component) => {

  //
  const shadowRoot = component.shadowRoot;
  const content = shadowRoot.getElementById('toolbar');

  //
  [...component.childNodes].forEach(node => {
    content.appendChild(node);
  });

  //
  const editor = document.getElementById(component.attributes.for);

  //
  content.addEventListener('click', e => {

    //
    const target = e.target;
    const type = target.getAttribute('type');

    //
    switch (type) {
      case 'strong': strong(editor); break;
      case 'emphasis': emphasis(editor); break;
      case 'orderedList': orderedList(editor); break;
      case 'code': code(editor); break;
    }

  });

};

//
const pkg = new Package('zendesk-toolbar');

pkg.addListener('attached', onAttached);
pkg.extend('focus', focus);
