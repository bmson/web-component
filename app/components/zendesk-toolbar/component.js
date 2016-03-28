// Dependencies
import Package from '@bmson/package';

//
const pkg = new Package('zendesk-toolbar');

//
pkg.addEventListener('created', component => {

  //
  const content = component.getElementById('toolbar');

  //
  [...component.childNodes].forEach(node => {
    content.appendChild(node);
  });

});

//
pkg.register({
  'activate': (component, key, status) => {

    //
    const selector = `[type=${key}]`;
    const element = component.querySelector(selector);

    //
    element.classList.toggle('on', status);

  }
});
