function Twelve(props) {
    var height = props.height || 100;
    var width = props.width || 100;

    var top = `${width / 2} ${height - (height * Math.sqrt(3) * .5)}`;
    var left = `${0} ${height / 2}`;
    var right = `${height} ${height / 2}`;
    var bottomRight = `${width - (width / 6)} ${height * .90}`;
    var bottomLeft = `${width / 6} ${height * .90}`;
    var points = `${top}, ${right}, ${bottomRight}, ${bottomLeft}, ${left}`;


    return (
        <svg height={height} width={width}>
        <polygon points={points} fill="ghostwhite" stroke="gainsboro" strokeWidth="3" />
        <text x="49%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="black">{props.label}</text>
    </svg>
    );
}

export default Twelve;