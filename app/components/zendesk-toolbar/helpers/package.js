// The underscore is used by webcomponents.js to polyfill the currentScript property which is not available in all browsers.
const currentScript = document._currentScript || document.currentScript;

// Module definition
export default class {

  constructor(uid = 'zendesk') {

    // Object properties
    const properties = {
      '__uid':            { 'writable': false, 'configurable': false, 'value': uid },
      '__event':          { 'writable': true,  'configurable': false, 'value': {} },
      'addEventListener': { 'writable': false, 'configurable': false, 'value': this.addEventListener },
      'extend':           { 'writable': false, 'configurable': false, 'value': this.extend },
      'register':         { 'writable': false, 'configurable': false, 'value': this.register }
    };

    // Create object
    return Object.create(HTMLElement.prototype, properties);

  }

  // Store callback in __event object
  addEventListener(name, fn) {

    this.__event[name] = fn;

  }

  // Register package
  register(extensions = {}) {

    // Variables
    const uid    = this.__uid;
    const event  = this.__event;

    // Create element callback
    this.createdCallback = function() {

      // Create shadow DOM and get content from <template>
      const owner      = currentScript.ownerDocument;
      const shadowRoot = this.createShadowRoot();
      const template   = owner.querySelector('template').content;

      // Add a clone of <template> into shadow root
      const templateNode = document.importNode(template, true);
      shadowRoot.appendChild(templateNode);

      // Get element attributes
      const reducerFn  = (result, item) => (result[item.name] = item.value) && result;
      const attributes = [...this.attributes].reduce(reducerFn, {})

      // Extend shadowRoot
      const shadowRootExtend = Object.create(shadowRoot, {
        'childNodes': { 'writable': false, 'configurable': false, 'value': this.childNodes },
        'attributes': { 'writable': false, 'configurable': false, 'value': attributes }
      });

      // Create extensions
      Object.keys(extensions).forEach(i => {

        const exists = this.hasOwnProperty(name);

        if (exists)
          throw new Error('You can not overwrite attributes');
        else
          this[i] = (...args) => extensions[i].call(this, shadowRootExtend, ...args);

      });

      // Trigger callback
      event.hasOwnProperty('created') && event.created.call(this, shadowRootExtend);

    };

    // Register element
    document.registerElement(uid, { 'prototype': this });

  }

}
