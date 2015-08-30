var defaultOptions = {
  debug:      false,
  container:  document.body,
  message:    'Hello Nothing!!'
};

var mergeOptions = function(...options) {
  return Object.assign({}, defaultOptions, ...options);
};

var renderApp = function() {
  let {container} = this.options;

  this.el             = document.createElement('h1');
  this.el.innerHTML   = this.options.message;
  container.insertBefore(this.el, container.childNodes[0]);

  return this;
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

    return this;
  }

  stop() {
    if(this.el)
      this.el.parentNode.removeChild(this.el);

    return this;
  }
}

export default Application;
