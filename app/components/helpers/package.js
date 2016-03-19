// The underscore is used by webcomponents.js to polyfill the currentScript property which is not available in all browsers.
const currentScript = document._currentScript || document.currentScript;

//
const properties = {

  //
  'version': {
    writable: false,
    configurable: false,
    value: '0.1.0'
  },

  //
  'register': {
    set: function(callback) {

      //console.log(this.constructor);
      this.createdCallback = function() {

        // Create shadow DOM and get content from <template>
        const owner = currentScript.ownerDocument;
        const shadowRoot = this.createShadowRoot();
        const template = owner.querySelector('template').content;

        // Add a clone of <template> into shadow root
        const templateNode = document.importNode(template, true);
        shadowRoot.appendChild(templateNode);

        // Trigger callback
        callback(shadowRoot, this.childNodes);

      };

    }
  }

};

//
export default (name) => {

  //
  const construct = Object.create(HTMLElement.prototype, properties);

  //
  document.registerElement(name, { 'prototype': construct });

  //
  return construct;

};
