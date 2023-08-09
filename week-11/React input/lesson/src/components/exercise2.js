import { useState, useEffect } from 'react';

const Exercise2 = () => {
    const [name, setName] = useState("");
    const [fruit, setFruit] = useState("");

    useEffect(() => {
        console.log(`${name} selected ${fruit}`)

    }, [fruit]);

    return (
        <div className="exercise">
            <h1>Exercise 2</h1>
            <input id="name-input" onChange={(e) => setName(e.target.value)} value={name} />
            <select id="select-input" onChange={(e) => setFruit(e.target.value)} value={fruit}>
                <option value="mango">mango</option>
                <option value="pineapple">pineapple</option>
                <option value="limon">limon</option>
            </select>
        </div>
    );
}
export default Exercise2;