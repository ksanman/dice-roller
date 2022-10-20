function Eight(props) {
    var height = props.height || 100;
    var width = props.width || 100;

    var top = `${width / 2} ${height - (height * Math.sqrt(3) * .5)}`;
    var left = `${0} ${height / 2}`;
    var right = `${height} ${height / 2}`;
    var bottom = `${width / 2} ${height * Math.sqrt(3) * .5}`;
    var points = `${top}, ${right}, ${bottom}, ${left}`;


    return (
        <svg height={height} width={width}>
        <polygon points={points} fill="orchid" stroke="darkmagenta" strokeWidth="3" />
        <text x="49%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="black">{props.label}</text>
    </svg>
    );
}

export default Eight;