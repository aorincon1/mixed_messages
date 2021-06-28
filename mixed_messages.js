

const mixedMessage = {
    _pronouns: ['He', 'She', 'They', 'We', 'I'],
    _verbs: ['love', 'hate'],
    _nouns: ['programming', 'readng', 'writing'],
    _languages: ['c++', 'JavaScript', 'python', 'ruby', 'PHP', 'Perl'],
    randomNum(arr) {
        if (arr.lenght === 1)
            return arr[0];
    
        return Math.floor(Math.random() * arr.length);
    },
    generateMixedMessage() {
        return `${this._pronouns[this.randomNum(this._pronouns)]} ${this._verbs[this.randomNum(this._verbs)]} ${this._nouns[this.randomNum(this._nouns)]} in ${this._languages[this.randomNum(this._languages)]}!`;
    }
};

console.log(mixedMessage.generateMixedMessage());