describe('wordPigLatin', function() {
  it('add "ay" to the end of a word that starts with a vowel', function() {
    expect(wordPigLatin("apple")).to.equal("appleay");
  });

  it('will move the first two consonants to the end and add "ay"', function() {
    expect(wordPigLatin("crater")).to.equal("atercray");
  });

  it('will move the consonant to the end and add "ay"', function() {
    expect(wordPigLatin("peach")).to.equal("eachpay");
  });
});

describe('sentencePigLatin', function() {
  it('take the first word of a sentence and add "ay"', function() {
    expect(sentencePigLatin('igloos are cozy')).to.equal('igloosay areay ozycay')
  });
});
