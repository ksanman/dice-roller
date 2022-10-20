import './dice-selector.css'
import getDice from '../dice/dice-map';
import NumberPicker from '../number-picker/number-picker';
import React from 'react';

function DiceSelector(props) {

    const onCountUpdate = (change) => {
        const value = parseInt(change);
        props.onDiceCountUpdate(props.faces, value)
    }

    const getDie = () => {
        var faces = props.faces;
        return getDice(faces, faces);
    }

    return (
        <div className="dice-selector">
            {getDie()}
            <NumberPicker count={props.diceCount} onCountUpdate={onCountUpdate} />
        </div>
    );
}

export default DiceSelector;