// Dependencies
import { default as Package } from './helpers/package';

//
const pkg = new Package('zendesk-editor');

//
pkg.register = (component, nodes) => {

  //
  const content = component.getElementById('content');

  //
  [...nodes].forEach(node => {
    content.appendChild(node);
  });

  //
  content.setAttribute('contentEditable', true);

};
