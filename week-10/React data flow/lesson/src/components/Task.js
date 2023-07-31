function Task(props) {
  return (
    <div>
        {props.text}
        {props.complete ? '' : <button onClick={() => props.completeTast(props.text)}>complete</button>}
        
    </div>
  );
}

export default Task;
