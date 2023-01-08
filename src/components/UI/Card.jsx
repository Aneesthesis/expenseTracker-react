import "./Card.css";

function Card(props){
    const classes = 'card '+  ( props.className);  //bcz children's classname too should be taken care of!

return <div className={classes}>{props.children}</div>

}

export default Card;