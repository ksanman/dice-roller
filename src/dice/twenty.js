function Twenty(props) {
    var height = props.height || 100;
    var width = props.width || 100;

    var top = `${width / 2} ${height - (height * Math.sqrt(3) * .5)}`;
    var left = `${0} ${height / 3.5}`;
    var right = `${height} ${height / 3.5}`;
    var bottomRight = `${height} ${height * .75}`;
    var bottomLeft = `${0} ${height * .75}`;
    var bottom =  `${width / 2} ${height * .90}`;
    var points = `${top}, ${right}, ${bottomRight}, ${bottom}, ${bottomLeft}, ${left}`;


    return (
        <svg height={height} width={width}>
        <polygon points={points} fill="chocolate" stroke="sienna" strokeWidth="3" />
        <text x="49%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="black">{props.label}</text>
    </svg>
    );
}

export default Twenty;