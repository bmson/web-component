// Module definition
export default class {

  // Create key-value store
  constructor() {
    this.store = {};
  }

  // Add event instance to store
  register(eventName, callback) {
    this.store[eventName] = callback;
  }

  // Remove event instance from store
  unregister(eventName) {
    delete this.store[eventName];
  }

  // Call event instance
  transmit(eventName, response) {
    this.store[eventName] && this.store[eventName].call(this, response);
  }

}
