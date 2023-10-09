import text_contraction


# sentence = "It would be unfair to demand that people cease pirating files when those same people aren't paid for their participation in very lucrative network schemes. Ordinary people are relentlessly spied on, and not compensated for information taken from them. While I'd like to see everyone eventually pay for music and the like, I'd not ask for it until there's reciprocity. Cat's nose was really cute."


# print(text_contraction.expand_contractions_in_sentence(sentence))


import os
import json
from nltk.tokenize import word_tokenize

all_verse_file = json.loads(open('./contr_expanded_all_shloka.json').read())

tokenized_verses = json.loads("[]")

for verse in all_verse_file:
    tokenized_verses.append(word_tokenize(text_contraction.expand_contractions_in_sentence(verse))) 


with open('./tokenized_shloka.json','w') as f:
    f.write(json.dumps(tokenized_verses))
    f.close()
