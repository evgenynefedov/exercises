import { useState, useEffect } from 'react'

function Ex1() {

    const [currentTime, setcurrentTime] = useState(new Date())

    useEffect(() => {
        setTimeout(() => { setcurrentTime(new Date())}, 1000)
    })

    return (
        <div className="exercise">
            <h1>Exercise 1</h1>
            <div class="time">{`${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`}</div>
        </div>
    );
}

export default Ex1;