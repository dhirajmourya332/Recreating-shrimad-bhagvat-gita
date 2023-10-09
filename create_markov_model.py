import json

def create_markov_model(tokenized_string_array,ngram = 3):
    markov_model = {}
    for tp_array in tokenized_string_array:
        for j in range(len(tp_array)  - ngram + 1):
            curr_state = ""
            next_state = ""
            for i in range(ngram):
                curr_state += tp_array[j + i] + " "

            if j + ngram < len(tp_array):
                next_state = tp_array[j + ngram]
            else:
                next_state = None

            if curr_state not in markov_model:
                markov_model[curr_state] = {}
                if next_state:
                    markov_model[curr_state][next_state] = 1
            else:
                if next_state:
                    if next_state in markov_model[curr_state]:
                        markov_model[curr_state][next_state] += 1
                    else:
                        markov_model[curr_state][next_state] = 1
        
    return markov_model


tokenized_string_array = json.loads(open('./tokenized_shloka.json','+r').read())


with open('./markov_model_3_ngram.json', 'w') as f:
    f.write(json.dumps(create_markov_model(tokenized_string_array)))