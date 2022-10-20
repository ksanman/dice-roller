function Four(props) {
    var height = props.height || 100;
    var width = props.width || 100;
    var top = `${width / 2} ${height - (height * Math.sqrt(3) * .5)}`;
    var left = `${0} ${height}`;
    var right = `${height} ${height}`;
    var points = `${top}, ${right}, ${left}`;
    return (
    <svg height={height} width={width}>
        <polygon points={points} fill="cyan" stroke="blue" strokeWidth="3" />
        <text x="50%" y="70%" dominantBaseline="middle" textAnchor="middle" fill="black">{props.label}</text>
    </svg>
    );
}

export default Four;