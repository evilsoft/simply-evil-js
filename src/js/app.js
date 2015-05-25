var defaultOptions = {
  debug:      false,
  container:  document.body,
  message:    'Hello Nothing!!',
};

// Some helpers to get the party started
var mergeOptions = function(...options) {
  return Object.assign({}, defaultOptions, ...options);
};

var renderApp = function() {
  let {container} = this.options,
      elem        = document.createElement('h1');

  elem.innerHTML = this.options.message;
  container.insertBefore(elem, container.childNodes[0]);
};

class Application {

  constructor(options={}) {
    this.options = mergeOptions(options);
  }

  start(options={}) {
    this.options = mergeOptions(this.options, options);
    renderApp.apply(this);

    if(this.options.debug)
      console.log('Application started with\n', this.options)
  }
}

export default Application;
