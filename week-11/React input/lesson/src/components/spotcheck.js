import React, { useState } from 'react'

function Spotcheck() {
    const [text, setText] = useState("")
    const [option1Checked, setoption1Checked] = useState("")

    const updateText = (event) => {
        setText(event.target.value)
    }

    const updateCheckbox = (event) => {
        setoption1Checked(event.target.checked)
        console.log(event.target.checked)
    }

    return (
        <div className="exercise">
            <h1>Spotcheck</h1>
            <input type="text" value={text} onChange={updateText} />
            <br/>
            <input type="checkbox" onChange={updateCheckbox} checked={option1Checked} />
        </div>
    )
}

export default Spotcheck;
