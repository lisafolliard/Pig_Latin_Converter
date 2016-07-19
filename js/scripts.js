
var wordPigLatin = function(word) {
  var vowels = ["a", "e", "i", "o", "u"];

  var first_letter = word.charAt(0);
  var second_letter = word.charAt(1);

  if (vowels.indexOf(first_letter) === 0) {
    var word = word.concat("ay");
    return word;

  } else if ((vowels.indexOf(first_letter) === -1) && (vowels.indexOf(second_letter) === -1)) {
    var two_letters = word.slice(0, 2);
    var new_word = word.substr(2).concat(two_letters).concat("ay");
    return new_word;

  } else if (vowels.indexOf(first_letter) === -1) {
    var letter = word.slice(0, 1);
    var new_word = word.substr(1).concat(letter).concat("ay");
    return new_word;
  }
};


var sentencePigLatin = function(sentence) {
  var silly_sentence = [];
  var silly_word = "";

  var new_sentence = sentence.split(" ");
  new_sentence.forEach(function(item) {
    silly_word = wordPigLatin(item);
    silly_sentence.push(silly_word);
  });
    return silly_sentence.join(' ');
};


$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    var word = ($("input#word").val());
    var new_word = wordPigLatin(word);

    $(".new_word").text(new_word);

    $("#result").show();
    event.preventDefault();

  });
});
