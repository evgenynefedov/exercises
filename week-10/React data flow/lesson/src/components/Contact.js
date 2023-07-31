function Contact(props) {
    return (
      <div>
        <li onClick={() => props.displayConvo(props.name)}>{props.name}</li>
      </div>
    );
  }
  
  export default Contact;
  