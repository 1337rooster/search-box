import {extendObservable, runInAction} from 'mobx';
//import crayola from './crayola.json'
import korean_words from './assist/korean_words.json'

export default class Colors {
    constructor() {
        extendObservable(this, {
            results: [],
            query: ''
        });
    }

    search() {
        runInAction(() => {
            const query_split = this.query.split(' ');
            if (query_split.length === 0) {
              return;
            }
            const last_term = query_split[query_split.length - 1];
            
            this.results = [];
            for (var i = 0; i < korean_words.length; i++) {
              const term = korean_words[i];
              if (term.english.toLowerCase().includes(last_term.toLowerCase())) {
                this.results.push(term);
                if (this.results.length > 15) {
                  break;
                }
              }
            };
            console.log('search end: '+ this.query.toLowerCase());
        });
    }

    updateQuery(value) {
        console.log('updateQuery ' + value);
        runInAction(() => this.query = value);
    }

    selectTerm(value) {
        console.log('selectTerm ' + value);
        const query_split = this.query.split(' ');
        if (query_split.length === 0) {
          return;
        }
        // Set the last term to the new value
        query_split[query_split.length - 1] = value;
        this.query = query_split.join(' ');
    }
}