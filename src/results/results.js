import './results.css'
import Dice from '../dice/dice';

function Results(props) {
    var results = [];
    var resultSet = props.results;
    resultSet.forEach((result, index) => {
        results.push(<Dice faces={result.face} roll={result.roll} key={index}/>);
    });

    return (
        <div>
            <div>Results</div>
            <div className="dice">
                {results}
            </div>
        </div>
    );
}

export default Results;