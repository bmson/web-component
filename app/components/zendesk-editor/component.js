// Global dependencies
import Package from '@bmson/package';
import Worker from '@bmson/worker';
import Walker from '@bmson/walker';

// Local dependencies
import selection from './extensions/selection';
import replace from './extensions/replace';

//
const onAttached = (component) => {

  //
  const {constructor, shadowRoot, childNodes} = component;

  //
  const content = shadowRoot.getElementById('content');

  //
  [...childNodes].forEach(node => {
    content.appendChild(node);
  });

  //
  content.setAttribute('contentEditable', true);

  //
  const walker = new Walker(content);

  // walker.subscribe('match', e => {
  walker.addEventListener('match', e => {
    // component.publish('match', e);
    constructor.publish('match', { 'nodeType': e.detail.nodeType, 'status': e.detail.status });
  });

};

//
const pkg = new Package('zendesk-editor');

pkg.subscribe('attached', onAttached);
pkg.extend('getSelection', selection);
pkg.extend('replaceSelection', replace);
