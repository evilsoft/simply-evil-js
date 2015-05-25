beforeEach ->
  fixture.setBase 'specs/helpers/fixtures'
  @targetElem = fixture.load('target.html')[0]

afterEach ->
  fixture.cleanup()
