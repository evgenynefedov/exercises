import React, { useState } from 'react';

function Hudini() {

    const [show, setShow] = useState(false)

    return (
        <div id="calendar">
            {show ? <div>Now you see me</div> : <div>Now you don’t</div>}
        </div>
    );
  }
  
  export default Hudini;