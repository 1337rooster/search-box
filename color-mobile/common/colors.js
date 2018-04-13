import {extendObservable, runInAction} from 'mobx';
//import crayola from './crayola.json'
import korean_words from './assist/korean_words.json'

function getWordAt (query_split, pos) {
  if (query_split.length === 0) {
    return -1;
  }
  var index = 0;
  for (var i = 0; i < query_split.length; i++) {
    for (var j = 0; j < query_split[i].length; j++) {
      if (index === pos) {
        console.log('pos ' + i);
        return i;
      }
      index++;
    }
    if (index === pos) {
      console.log('pos ' + i);
      return i;
    }
    index++;
  }
  console.log('pos ' + (query_split.length - 1));
  return query_split.length - 1;
}

export default class Colors {
    constructor() {
        extendObservable(this, {
            results: [],
            query: ''
        });
    }

    search(caretPos) {
        runInAction(() => {
            const query_split = this.query.split(' ');
            if (query_split.length == 0) {
              return;
            }
            console.log('this.query ' + this.query);
            const selected_term = query_split[getWordAt(query_split, caretPos)];
            console.log(this.query + '[' + caretPos + ']: selected_term: ' + selected_term);
            this.results.length = 0;
            for (var i = 0; i < korean_words.length; i++) {
              const term = korean_words[i];
              if (term.english.toLowerCase().includes(selected_term.toLowerCase())) {
                this.results.push(term);
              } else if (term.korean.toLowerCase().includes(selected_term.toLowerCase())) {
                this.results.push(term);
              }
              if (this.results.length > 15) {
                break;
              }
            };
        });
    }

    updateQuery(value) {
        runInAction(() => {
          this.query = value
        });
    }

    selectTerm(value, caretPos) {
      runInAction(() => {
        const query_split = this.query.split(' ');
        if (query_split.length == 0) {
          query_split.push(value);
        } else {
          var index = getWordAt(query_split, caretPos);
          query_split[index] = value;
        }
        // Set the last term to the new value
        this.query = query_split.join(' ');
      });
    }
}