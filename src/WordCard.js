import React from 'react';
import CharacterCard from './CharacterCard';
import _ from 'lodash';

export default function WordCard(props){

    const [state, setState] = useState(prepareStateFromWord(props.value))
    
    const activationHandler = c => { 
        console.log(`${c} has been activated.`) 
    }
    
    return (
        <div>
            { 
                state.chars.map((c, i) => 
                    <CharacterCard value={c} key={i} activationHandler={activationHandler}/>
                ) 
            }
        </div>
    )
}