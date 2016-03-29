// Module defenition
export default (component, key, status) => {

  //
  const selector = `[type=${key}]`;
  const element = component.querySelector(selector);

  //
  element && element.classList.toggle('on', status);

}
