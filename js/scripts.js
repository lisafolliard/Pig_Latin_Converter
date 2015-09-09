var pigLatin = function(word) {
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


$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    var word = ($("input#word").val());
    var new_word = pigLatin(word);

    $(".new_word").text(new_word);

    $("#result").show();
    event.preventDefault();

  });
});
