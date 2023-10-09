const fs = require("fs");

var randomKey = function (obj) {
  var keys = Object.keys(obj);
  return keys[(keys.length * Math.random()) << 0];
};

function create_verse(markov_model, start, limit = 30, ngram) {
  let story_arr = start.split(" ");
  for (let i = 0; i < limit; i++) {
    let current_state = [];
    for (let j = story_arr.length - ngram; j < story_arr.length; j++) {
      current_state.push(story_arr[j]);
    }

    if (markov_model.hasOwnProperty(current_state.join(" "))) {
      story_arr.push(randomKey(markov_model[current_state.join(" ")]));
    }
  }
  return story_arr.join(" ");
}

const markov_model = JSON.parse(
  fs.readFileSync("./markov_model_3_ngram.json", { encoding: "utf-8" })
);

for (let i = 0; i < 5; i++) {
  console.log(create_verse(markov_model, "o arjuna ,", 120, 3) + "\n\n\n");
}
