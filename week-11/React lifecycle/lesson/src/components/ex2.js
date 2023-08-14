import { useState, useEffect } from 'react'

function Ex2() {

    const [posts, setPosts] = useState([])
    const [width, setWidth] = useState(window.innerWidth)
    const breakpoint = 620

    useEffect(() => {
        const getData = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts")
            const data = await response.json()
            setPosts(data.slice(0, 10))
        }
        getData()
    }, [])

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
    
        return () => window.removeEventListener("resize", handleWindowResize);
    }, [])

    return (
        <div className="exercise">
            <h1>Exercises 2-3</h1>
            <div>
                {posts.map(p => 
                    <span key={p.id} className={width < breakpoint ? "ex2post-mobile" : "ex2post"}>
                        <b>{p.title}</b>
                        <p>{p.body}</p>
                    </span>
                )}
            </div>
        </div>
    );
}

export default Ex2;