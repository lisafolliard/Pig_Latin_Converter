describe('wordPigLatin', function() {
  it('will add "ay" to the end of a word that starts with a vowel', function() {
    expect(wordPigLatin("apple")).to.equal("appleay");
  });

  it('will move the first consonant to the end of a word and then add "ay"', function() {
    expect(wordPigLatin("peach")).to.equal("eachpay");
  });

  it('will move the first two consonants to the end of a word and then add "ay"', function() {
    expect(wordPigLatin("crater")).to.equal("atercray");
  });
});

describe('sentencePigLatin', function() {
  it('take each word in a sentence and apply Pig Latin', function() {
    expect(sentencePigLatin('candy pop')).to.equal('andycay oppay')
  });
});
