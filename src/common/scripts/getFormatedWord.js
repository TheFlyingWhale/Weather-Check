/**
 *  getFormatedWord.js
 *  takes a word and its intended size.
 *  returns an h2 element with a suited size based on word count and intended size
 */

const getFormatedWord = (word) => {
    if (word.length <= 11){
        console.log('word does not exceed max-length');
        return <h2 className="txt-large txt-w-normal black location">{word}</h2>;
    } else {
        console.log('word exceeds max-length');
        return <h2 className="txt-small minimizedLineHeight txt-w-normal black location">{word}</h2>;
    }
}

export default getFormatedWord;