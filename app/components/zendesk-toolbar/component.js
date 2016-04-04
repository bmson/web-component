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
const formats = {
  'strong': strong,
  'em': emphasis,
  'ol': orderedList,
  'code': code,
  'macro': macro
};

//
const onAttached = (component) => {

  //
  const {constructor, shadowRoot, attributes, childNodes} = component;

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
    const type = e.target.getAttribute('type');

    //
    formats[type].call(this, editor)

  });

};

//
const pkg = new Package('zendesk-toolbar');

pkg.subscribe('attached', onAttached);
pkg.extend('focus', focus);
