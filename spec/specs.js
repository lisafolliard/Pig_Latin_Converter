describe('pigLatin', function() {
  it('add "ay" to the end of a word that starts with a vowel', function() {
    expect(pigLatin("apple")).to.equal("appleay");
  });
});
