export default function Box(props){
    return (
        // <div className="box" style={{backgroundColor : props.on ? 'black' : 'gray'}} onClick={() => props.handleClick(props.id)}></div>
        <div className="box" style={{backgroundColor : props.on ? 'black' : 'gray'}} onClick={props.handleClick}></div>
    )
}