// Dependencies
import Package from './helpers/package';
import Walker from './nodes/walker';

//
const pkg = new Package('zendesk-editor');

//
pkg.register = (component, children, attributes) => {

  //
  const content = component.getElementById('content');

  //
  [...children].forEach(node => {
    content.appendChild(node);
  });

  //
  content.setAttribute('contentEditable', true);


  //
  const attribute = attributes.find(e => e.name === 'for');
  const toolbar = document.getElementById(attribute.value);

  //
  const walker = new Walker(content);

  if (toolbar) {
    walker.match('B', e => toolbar.activate(e));
    walker.match('I', e => toolbar.activate(e));
    walker.match('U', e => toolbar.activate(e));
  }

};
