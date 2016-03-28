// Dependencies
export default (module) => {

  //
  const blob = new Blob(['new ', module], { type: 'text/javascript' });
  const objectURL = URL.createObjectURL(blob);

  //
  return new Worker(objectURL);

}

/*
workerBlob.addEventListener('message', function(e) {
  console.log('Worker said: ', e.data);
});

workerBlob.postMessage('Hello World');

export default () => {

  //
  self.addEventListener('message', (e) => {
    self.postMessage('');
  });

}
*/
