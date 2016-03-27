// Dependencies
import Package from './helpers/package';

//
const pkg = new Package('zendesk-toolbar');

//
pkg.register = (component, children) => {

  //
  const content = component.getElementById('toolbar');

  //
  [...children].forEach(node => {
    content.appendChild(node);
  });

  //
  pkg.activate = (e) => {

    //
    const selector = `[type=${e.key}]`;
    const element = component.querySelector(selector);

    //
    element.classList.toggle('on', e.type);

  };


};
