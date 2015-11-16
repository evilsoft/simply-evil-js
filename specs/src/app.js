const App = appRequire('./app.js').default

describe('Application', function() {

  let app, elem

  beforeEach(function() {
    app = new App()
  })

  describe('options', function() {

    describe('defaults', function() {

      beforeEach(function() {
        app.start()
      })

      it('sets debug to false', function() {
        expect(app.options.debug).toBeFalse()
      })

      it('sets container to the body element', function() {
        expect(app.options.container).toBe(document.body)
      })

      it('sets message to Hello Nothing!!', function() {
        expect(app.options.message).toEqual('Hello Nothing!!')
      })

    })

    describe('option setting', function() {

      beforeEach(function() {
        spyOn(console, 'log')

        elem = document.createElement('h1')

        app.start({
          debug:      true,
          message:    'Using start',
          container:  elem,
        })
      })

      describe('debug option is true', function() {

        it('sets debug to true', function() {
          expect(app.options.debug).toBeTrue()
        })

        it('reports to the console', function() {
          expect(console.log).toHaveBeenCalled()
        })

      })

      it('overrides message to Using start', function() {
        expect(app.options.message).toEqual('Using start')
      })

      it('sets the container to a specified html element', function() {
        expect(app.options.container).toBe(elem)
      })

    })

  })

})
