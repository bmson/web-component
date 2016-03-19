// Dependencies
import { default as Package } from './helpers/package';

//
const pkg = new Package('custom-dom');

//
pkg.register = (component, nodes) => {

  [...nodes].forEach(node => {
    component.getElementById('content').appendChild(node);
  });

};
