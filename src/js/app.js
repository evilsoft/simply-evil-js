const defaultOptions = {
  debug:      false,
  container:  document.body,
  message:    'Hello Nothing!!'
};

function mergeOptions(...options) {
  return Object.assign({}, defaultOptions, ...options);
};

function renderApp() {
  let { container } = this.options;

  this.el             = document.createElement('h1');
  this.el.innerHTML   = this.options.message;
  container.insertBefore(this.el, container.childNodes[0]);

  return this;
};

class Application {
  start(options={}) {
    this.options = mergeOptions(options);

    renderApp.apply(this);

    if(this.options.debug)
      console.log('Application started with\n', this.options)

    return this;
  }

  stop() {
    let { el } = this;

    if(el) el.parentNode.removeChild(el);

    return this;
  }
}

export default Application;
