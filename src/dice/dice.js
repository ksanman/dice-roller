import './dice.css'
import getDice from './dice-map';
function Dice(props) {
    
    const drawDie = () => {
        return getDice(props.faces, props.roll);
    };

    var die = drawDie();

    return (
        <div className="die">
            {die}
        </div>
    )
}

export default Dice;