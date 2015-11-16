beforeEach(function() {
  fixture.setBase('specs/helpers/fixtures')
  this.targetElem = fixture.load('target.html')[0]
})

afterEach(function() {
  fixture.cleanup()
})
