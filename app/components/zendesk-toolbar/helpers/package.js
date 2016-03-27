// The underscore is used by webcomponents.js to polyfill the currentScript property which is not available in all browsers.
const currentScript = document._currentScript || document.currentScript;

// Module definition
export default class {

  constructor(name = 'zendesk') {

    // Object properties
    const properties = {
      'version':  { 'writable': false, 'configurable': false, 'value': '0.1.0' },
      'name':     { 'writable': false, 'configurable': false, 'value': name },
      'register': { 'set': this.register }
    };

    // Create object
    return Object.create(HTMLElement.prototype, properties);

  }

  register(callback = Function.prototype) {

    this.createdCallback = function() {

      // Create shadow DOM and get content from <template>
      const owner = currentScript.ownerDocument;
      const shadowRoot = this.createShadowRoot();
      const template = owner.querySelector('template').content;

      // Add a clone of <template> into shadow root
      const templateNode = document.importNode(template, true);
      shadowRoot.appendChild(templateNode);

      // Get element attributes
      const reducer = (result, item) => (result[item.name] = item.value) && result;
      const attributes = [...this.attributes].reduce(reducer, {})

      // Callback
      callback.call(this, shadowRoot, this.childNodes, attributes);

    };

    // Register element
    document.registerElement(this.name, { 'prototype': this });

  }

}
