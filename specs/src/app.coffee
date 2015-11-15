App = appRequire('./app.js').default

describe 'Application', ->
  describe 'options', ->
    beforeEach ->
      @app = new App

    describe 'defaults', ->
      beforeEach ->
        @app.start()

      it 'sets debug to false', ->
        expect(@app.options.debug).toBeFalse()

      it 'sets container to the body element', ->
        expect(@app.options.container).toBe document.body

      it 'sets message to Hello Nothing!!', ->
        expect(@app.options.message).toEqual 'Hello Nothing!!'

    describe 'option setting', ->
      beforeEach ->
        spyOn(console, 'log') #STFU

        @elm = document.createElement('h1')
        @app.start
          debug:      true
          message:    'Using start'
          container:  @elm

      describe 'debug option is true', ->
        it 'sets debug to true', ->
          expect(@app.options.debug).toBeTrue()

        it 'sets debug true', ->
          expect(console.log).toHaveBeenCalled()

      it 'overrides message to Using start', ->
        expect(@app.options.message).toEqual 'Using start'

      it 'sets the container to a specified html element', ->
        expect(@app.options.container).toBe @elm
