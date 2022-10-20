import './number-picker.css'
import React from 'react'

function NumberPicker(props) {

    const updateCount = (amount) => {
        var newCount = Math.max(0, props.count + amount)
        props.onCountUpdate(newCount);
    }

    return ( 
        <div className='picker'>
            <button onClick={(e) => updateCount(-1)}>-</button>
            <span>{props.count}</span>
            <button onClick={(e) => updateCount(1)}>+</button>
        </div>
    );
}

export default NumberPicker;