import React, { useState } from 'react'

function Exercise1() {

    const [gallery, setGallery] = useState({
        images: [
            "http://www.agr.gc.ca/resources/prod/img/discover-decouvrez/potatoes300x210.jpg",
            "https://3.bp.blogspot.com/-MyT6z0ye8CY/UBIu8k4ClFI/AAAAAAAANks/RAyzmcg42uo/s1600/lecttuce+3.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/PerfectStrawberry.jpg/220px-PerfectStrawberry.jpg"],
        currentImg: 0
    })

    const shiftImageBack = () => setGallery({ ...gallery, currentImg: gallery.currentImg - 1 })
    const shiftImageForward = () => setGallery({ ...gallery, currentImg: gallery.currentImg + 1 })
    
    return (
      <div>
        <img src={gallery.images[gallery.currentImg]} ></img>
        <div>
            <button onClick={shiftImageBack}>back</button>
            <button onClick={shiftImageForward}>forward</button>
        </div>
      </div>
    );
  }
  
  export default Exercise1;
  