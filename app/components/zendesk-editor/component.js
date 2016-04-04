// Global dependencies
import Package from '@bmson/package';
import Worker from '@bmson/worker';
import Walker from '@bmson/walker';

// Local dependencies
import range from './extensions/range';
import replace from './extensions/replace';
import cursor from './extensions/cursor';

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

  //
  var ws = new WebSocket('ws://localhost:8080/5');
  var username = Math.random().toString(36).substring(7);

  ws.onmessage = (e) => {
    console.info(JSON.parse(e.data));
  }

  ws.onopen = () => {
    ws.send(JSON.stringify({
      'username': username,
      'message': 'hello'
    }));
  };

  content.addEventListener('keyup', e => {

    const position = cursor(content, shadowRoot);

    ws.send(JSON.stringify({
      'username': username,
      'message': 'change',
      'cursor': position,
    }));
  });

  window.onbeforeunload = e => {
    ws.send(JSON.stringify({
      'username': username,
      'message': 'bye'
    }));
  }

};

//
const pkg = new Package('zendesk-editor');

pkg.subscribe('attached', onAttached);
pkg.extend('getRange', range);
pkg.extend('replaceSelection', replace);
