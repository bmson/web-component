// Dependencies
import Package from '@bmson/package';
import active from './extensions/active';

//
const onCreated = (component) => {

  //
  const content = component.getElementById('toolbar');

  //
  [...component.childNodes].forEach(node => {
    content.appendChild(node);
  });

  const editor = document.getElementById(component.attributes.for);

  //
  content.addEventListener('click', e => {

    const target = e.target;

    if (target.nodeName === 'BUTTON') {
      const type = target.getAttribute('type');
      const selection = editor.getSelection();
      const elem = document.createElement(type);

      const children = selection.querySelectorAll(type);
      console.log(children);

      elem.appendChild(selection);

      editor.replaceSelection(elem);

    }

  });

};

//
const pkg = new Package('zendesk-toolbar');

//pkg.stylesheet('./component.css');
pkg.addEventListener('created', onCreated);
pkg.register({
  'activate': active
});
