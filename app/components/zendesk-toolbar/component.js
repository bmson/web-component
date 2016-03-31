// Global dependencies
import Package from '@bmson/package';

// Local dependencies
import focus from './extensions/focus';
import strong from './extensions/formatting/strong';
import emphasis from './extensions/formatting/emphasis';
import orderedList from './extensions/formatting/orderedList';
import code from './extensions/formatting/code';
import macro from './extensions/formatting/macro';

//
const onAttached = (component) => {

  //
  const constructor = component.constructor;
  const shadowRoot = component.shadowRoot;
  const attributes = component.attributes;
  const childNodes = component.childNodes;

  //
  const content = shadowRoot.getElementById('toolbar');

  //
  [...childNodes].forEach(node => {
    content.appendChild(node);
  });

  //
  const editor = document.getElementById(attributes.for);

  editor.subscribe('match', e => {
    constructor.focus(e.nodeType, e.status);
  });

  // component.subscribe('click', e => {
  content.addEventListener('click', e => {

    //
    const target = e.target;
    const type = target.getAttribute('type');

    //
    switch (type) {
      case 'strong': strong(editor); break;
      case 'em': emphasis(editor); break;
      case 'ol': orderedList(editor); break;
      case 'code': code(editor); break;
      case 'macro': macro(editor); break;
    }

  });

};

//
const pkg = new Package('zendesk-toolbar');

pkg.subscribe('attached', onAttached);
pkg.extend('focus', focus);
