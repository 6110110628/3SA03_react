import React, { useState } from 'react';
import _, { attempt } from 'lodash';
import CharacterCard from './CharacterCard';

var count_win = 0;
const prepareStateFromWord = given_word => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1, // รอบการเล่น
        guess: '', // จำนวนคลิ๊ก
        complete: false, // การเล่นจบแล้วหรือยัง
    }
}
export default function WordCard(props){
    const [state, setState] = useState(prepareStateFromWord(props.value))
    const activationHandler = c => {
        console.log(`${c} has been activated.`)
        let guess = state.guess + c
        console.log(guess)
        setState({...state, guess})
        if(guess.length == state.word.length) {
            if(guess == state.word) {
                count_win++;
                console.log('yeah! your score : '+count_win)
                alert('yeah! your score : '+count_win)
                setState({...state, completed: true})
            }
            else {
                console.log('rest, next attempt')               
                setState({...state, guess: '' , attempt: state.attempt + 1})
            }
            if(count_win == 5){
                console.log('Congrats!')
                alert('Congrats!')
            }
            
        }
    }
    return (
        <div>
            {
                state.chars.map((c, i) => 
                    <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt}/>
                ) 
            }
        </div>
    );
}