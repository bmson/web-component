// Module defenition
export default function (key, status) {

  //
  const shadowRoot = this.shadowRoot;

  //
  const selector = `[type=${key}]`;
  const element = shadowRoot.querySelector(selector);

  //
  element && element.classList.toggle('on', status);

}
