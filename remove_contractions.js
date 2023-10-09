const fs = require("fs");

const contractions_dict = {
  "ain't": "are not",
  "aren't": "are not",
  "can't": "cannot",
  "can't've": "cannot have",
  "'cause": "because",
  "could've": "could have",
  "couldn't": "could not",
  "couldn't've": "could not have",
  "didn't": "did not",
  "doesn't": "does not",
  "hadn't": "had not",
  "hadn't've": "had not have",
  "hasn't": "has not",
  "haven't": "have not",
  "he'd": "he would",
  "he'd've": "he would have",
  "he'll": "he will",
  "he'll've": "he will have",
  "how'd": "how did",
  "how'd'y": "how do you",
  "how'll": "how will",
  "I'd": "I would",
  "I'd've": "I would have",
  "I'll": "I will",
  "I'll've": "I will have",
  "I'm": "I am",
  "I've": "I have",
  "isn't": "is not",
  "it'd": "it would",
  "it'd've": "it would have",
  "it'll": "it will",
  "it'll've": "it will have",
  "let's": "let us",
  "ma'am": "madam",
  "mayn't": "may not",
  "might've": "might have",
  "mightn't": "might not",
  "mightn't've": "might not have",
  "must've": "must have",
  "mustn't": "must not",
  "mustn't've": "must not have",
  "needn't": "need not",
  "needn't've": "need not have",
  "o'clock": "of the clock",
  "oughtn't": "ought not",
  "oughtn't've": "ought not have",
  "shan't": "shall not",
  "sha'n't": "shall not",
  "shan't've": "shall not have",
  "she'd": "she would",
  "she'd've": "she would have",
  "she'll": "she will",
  "she'll've": "she will have",
  "should've": "should have",
  "shouldn't": "should not",
  "shouldn't've": "should not have",
  "so've": "so have",
  "that'd": "that would",
  "that'd've": "that would have",
  "there'd": "there would",
  "there'd've": "there would have",
  "they'd": "they would",
  "they'd've": "they would have",
  "they'll": "they will",
  "they'll've": "they will have",
  "they're": "they are",
  "they've": "they have",
  "to've": "to have",
  "wasn't": "was not",
  "we'd": "we would",
  "we'd've": "we would have",
  "we'll": "we will",
  "we'll've": "we will have",
  "we're": "we are",
  "we've": "we have",
  "weren't": "were not",
  "what'll": "what will",
  "what'll've": "what will have",
  "what're": "what are",
  "what've": "what have",
  "when've": "when have",
  "where'd": "where did",
  "where've": "where have",
  "who'll": "who will",
  "who'll've": "who will have",
  "who've": "who have",
  "why've": "why have",
  "will've": "will have",
  "won't": "will not",
  "won't've": "will not have",
  "would've": "would have",
  "wouldn't": "would not",
  "wouldn't've": "would not have",
  "y'all": "you all",
  "y'all'd": "you all would",
  "y'all'd've": "you all would have",
  "y'all're": "you all are",
  "y'all've": "you all have",
  "you'd": "you would",
  "you'd've": "you would have",
  "you'll": "you will",
  "you'll've": "you will have",
  "you're": "you are",
  "you've": "you have",
};

const re = new RegExp(
  /(ain\'t|aren\'t|can\'t|can\'t\'ve|\'cause|could\'ve|couldn\'t|couldn\'t\'ve|didn\'t|doesn\'t|hadn\'t|hadn\'t\'ve|hasn\'t|haven\'t|he\'d|he\'d\'ve|he\'ll|he\'ll\'ve|how\'d|how\'d\'y|how\'ll|I\'d|I\'d\'ve|I\'ll|I\'ll\'ve|I\'m|I\'ve|isn\'t|it\'d|it\'d\'ve|it\'ll|it\'ll\'ve|let\'s|ma\'am|mayn\'t|might\'ve|mightn\'t|mightn\'t\'ve|must\'ve|mustn\'t|mustn\'t\'ve|needn\'t|needn\'t\'ve|o\'clock|oughtn\'t|oughtn\'t\'ve|shan\'t|sha\'n\'t|shan\'t\'ve|she\'d|she\'d\'ve|she\'ll|she\'ll\'ve|should\'ve|shouldn\'t|shouldn\'t\'ve|so\'ve|that\'d|that\'d\'ve|there\'d|there\'d\'ve|they\'d|they\'d\'ve|they\'ll|they\'ll\'ve|they\'re|they\'ve|to\'ve|wasn\'t|we\'d|we\'d\'ve|we\'ll|we\'ll\'ve|we\'re|we\'ve|weren\'t|what\'ll|what\'ll\'ve|what\'re|what\'ve|when\'ve|where\'d|where\'ve|who\'ll|who\'ll\'ve|who\'ve|why\'ve|will\'ve|won\'t|won\'t\'ve|would\'ve|wouldn\'t|wouldn\'t\'ve|y\'all|y\'all\'d|y\'all\'d\'ve|y\'all\'re|y\'all\'ve|you\'d|you\'d\'ve|you\'ll|you\'ll\'ve|you\'re|you\'ve)/g
);

const shloka_all_json = fs.readFileSync("./shloka_all.json", {
  encoding: "utf-8",
});

const shloka_all = JSON.parse(shloka_all_json);

shloka_all.forEach((shloka, key) => {
  shloka_all[key] = shloka.replaceAll(re, (match) => {
    if (!contractions_dict.hasOwnProperty(match)) {
      console.log(shloka_all[key]);
    }
    contractions_dict[match];
  });
});

fs.writeFileSync(
  "./contr_expanded_all_shloka.json",
  JSON.stringify(shloka_all)
);
