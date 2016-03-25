// Dependencies
import { default as Package } from './helpers/package';

//
const pkg = new Package('zendesk-toolbar');

//
pkg.register = (component, nodes) => {

  //
  const content = component.getElementById('toolbar');

  //
  [...nodes].forEach(node => {
    content.appendChild(node);
  });

};
