function Conversation(props) {
    return (
      <div>
        {props.convo.map(m => 
            <div>
                <span className="sender">{m.sender == "self" ? "Me" : props.sender}: </span>
                {m.text}
            </div>
        )}
        <button onClick={props.back}>Back</button>
      </div>
    );
  }
  
  export default Conversation;
  