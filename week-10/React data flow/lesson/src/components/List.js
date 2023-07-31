import Contact from "./Contact";

function List(props) {
    return (
      <div>
        {props.contacts.map(c => <Contact name={c.name} displayConvo={props.displayConvo} />)}
      </div>
    );
  }
  
  export default List;
  