describe('This is my second test suite', () => {
    it.only('My First TC', ()=>{
      expect(true).to.equal(true);
    })
  
    it('My Second TC',()=>{
      expect(true).to.equals(false);
    })
  
    it.skip('My Third TC',function(){
      expect(true).to.equal(false);
    })
  
    it('My Fourth TC')
  })


  describe('This is my third test suite', () => {
    it.only('My First TC', ()=>{
      expect(true).to.equal(true);
    })
  
    it.only('My Second TC',()=>{
      expect(true).to.equals(false);
    })
  
    it.skip('My Third TC',function(){
      expect(true).to.equal(false);
    })
  
    it('My Fourth TC')
  })