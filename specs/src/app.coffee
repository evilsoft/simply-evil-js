App = appRequire './app.js'

describe 'Application', ->
  describe 'options', ->
    describe 'defaults', ->
      beforeEach ->
        @app = new App

      it 'sets debug to false', ->
        expect(@app.options.debug).toBeFalse()

      it 'sets container to the body element', ->
        expect(@app.options.container).toBe document.body

      it 'sets message to Hello Nothing!!', ->
        expect(@app.options.message).toEqual 'Hello Nothing!!'

    describe 'option setting', ->
      beforeEach ->
        @app = new App
          debug:      true
          container:  @targetElem
          message:    'Madness'
          foo:        'bar'
          app:        true

      describe 'on construction', ->
        it 'sets debug to true', ->
          expect(@app.options.debug).toBeTrue()

        it 'sets container to target fixture', ->
          expect(@app.options.container).toBe @targetElem

        it 'sets message to Maddness', ->
          expect(@app.options.message).toEqual 'Madness'

        it 'sets foo to bar', ->
          expect(@app.options.foo).toEqual 'bar'

        it 'sets app to true', ->
          expect(@app.options.app).toBeTrue()

      describe 'on start', ->
        beforeEach ->
          @app.start
            debug:      false
            message:    'Using start'
            foo:        'baz'

        it 'overrides debug to false', ->
          expect(@app.options.debug).toBeFalse()

        it 'keeps container to target fixture', ->
          expect(@app.options.container).toBe @targetElem

        it 'overrides message to Using start', ->
          expect(@app.options.message).toEqual 'Using start'

        it 'overrides foo to baz', ->
          expect(@app.options.foo).toEqual 'baz'

        it 'keeps app as true', ->
          expect(@app.options.app).toBeTrue()
