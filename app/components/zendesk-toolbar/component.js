// Dependencies
import Package from './helpers/package';

//
const pkg = new Package('zendesk-toolbar');

//
pkg.register = (component, children, attributes) => {

  //
  const content = component.getElementById('toolbar');

  //
  [...children].forEach(node => {
    content.appendChild(node);
  });

  //
  pkg.activate = (key, status) => {

    //
    const selector = `[type=${key}]`;
    const element = component.querySelector(selector);

    //
    element.classList.toggle('on', status);

  };


};
