function Six(props) {
    var height = props.height || 100;
    var width = props.width || 100;
    return (
    <svg height={height} width={width}>
        <rect width={width} height={height} fill="salmon" stroke="maroon" strokeWidth="5" />
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="black">{props.label}</text>
    </svg>
    );
}

export default Six;