import './roller.css';
import '../dice-selector/dice-selector';
import DiceSelector from '../dice-selector/dice-selector';
import React, { useState } from 'react';

function Roller(props) {
    const diceTypes = [4, 6, 8, 10, 12, 20];
    
    const createDiceDict = () => {
        const diceDict = {};
        diceTypes.forEach(t => diceDict[t] = 0);
        return diceDict;
    }
    var dict = createDiceDict();

    const [dice, setDice] = useState(dict);

    const updateDice = (currentType, count) => {
        let copyDict = {...dice};
        copyDict[currentType] = count;
        setDice(copyDict);
    }

    const getRoll = (faces) => {
        return Math.floor(Math.random() * faces) + 1;
    }

    const rollDice = () => {
        var rolls = Object.keys(dice).map((key, index) => {
            const results = [];
            var diceCount = dice[key];
            for(var i = 0; i < diceCount; i++) {
                var roll = getRoll(key);
                results.push({face: key, roll: roll});
            }

            return results;
        });
        var finalResults = rolls.flat();
        props.onDiceRoll(finalResults);
    }

    const getSelectors = () => {
        var selectors = [];
        var numberOfSelectors = diceTypes.length;
        for(var i = 0; i < numberOfSelectors; i++) {
            var diceType = diceTypes[i];
            selectors.push(<DiceSelector
                key={i}
                faces={diceType}
                diceCount={dice[diceType]}
                onDiceCountUpdate={(dType, count) => updateDice(dType, count)}
                 />);
        }

        return selectors;
    }

    const reset = () => {
        props.onDiceRoll([]);
        setDice(createDiceDict());
    }

    return (
        <div>
            <div>Current Dice</div>
            <div className="selectors">
                {getSelectors()}
            </div>
            <div className='actions'>
                <button className="btn roll" onClick={rollDice}> Roll! </button>
                <button className="btn reset" onClick={reset}> Reset </button>
            </div>
            
        </div>
    );
}

export default Roller;