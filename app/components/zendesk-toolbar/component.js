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

      const text = selection.toString();
      const node = document.createTextNode(text);
      const elem = document.createElement(type);

      elem.appendChild(node);

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
