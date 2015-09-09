describe('pigLatin', function() {
  it('add "ay" to the end of a word that starts with a vowel', function() {
    expect(pigLatin("apple")).to.equal("appleay");
  });

  it('will move the consonant to the end and add "ay"', function() {
    expect(pigLatin("peach")).to.equal("eachpay");
  });
});
