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
  const shadowRoot = component.shadowRoot;
  const content = shadowRoot.getElementById('content');

  //
  [...component.childNodes].forEach(node => {
    content.appendChild(node);
  });

  //
  content.setAttribute('contentEditable', true);

  //
  const selector = `[for=${component.attributes.id}]`;
  const toolbar = document.querySelector(selector);

  //
  const walker = new Walker(content);

  walker.addEventListener('match', e => {

    if (toolbar && toolbar.activate)
      toolbar.focus(e.detail.nodeType, e.detail.status);

  });

};

//
const pkg = new Package('zendesk-editor');

pkg.addListener('attached', onAttached);
pkg.extend('getSelection', selection);
pkg.extend('replaceSelection', replace);
