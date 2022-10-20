describe('This is my first test suite', () => {
  it('My First TC', function(){
    expect(true).to.equal(true);
  })

  it('My Second TC',function(){
    expect(true).to.equals(false);
  })

  it.skip('My Third TC',function(){
    expect(true).to.equal(false);
  })

  it('My Fourth TC')
})