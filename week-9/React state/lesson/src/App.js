import React, { useState } from 'react';
import Hudini from './components/Hudini';
import Home from './components/Home';
import Landing from './components/Landing';
import './App.css';

const App = () => {

  const [storeData, setStoreData] = useState({
    user: "Robyn",
    store: [
      { item: "XSPS Pro Player", price: 800, discount: 0.2, hottest: false },
      { item: "Gizem Backwatch", price: 230, discount: 0.6, hottest: false },
      { item: "Surround Sound Pelican", price: 3099, discount: 0.05, hottest: true }
    ],
    shouldDiscount: false,
    currentPage: "Landing"
  })

  const [currentPage, setCurrentPage] = useState("home")

  const togglePage = function(){
    currentPage == "home" ? setCurrentPage("landing") : setCurrentPage("home")
  }

  const toggleDiscount = function(){
    let storeDataCopy = {...storeData}
    storeDataCopy.shouldDiscount ? storeDataCopy.shouldDiscount = false : storeDataCopy.shouldDiscount = true
    setStoreData(storeDataCopy)
  }

  return (
    <div>
      <div id="exercise1" className="exercise"> 
        <h1>Exercise 1</h1>
        <Hudini />
      </div>
      <div id="exercise2-4" className="exercise">
        <h1>Exercise 2-4</h1>
        <button onClick={togglePage}>{currentPage == "home" ? "go to Landing" : "go to Home"}</button>
        <button onClick={toggleDiscount}>{storeData.shouldDiscount ? "cancel discount" : "apply discount"}</button>

        {currentPage == "home" ? 
          <Landing user={storeData.user} hottestItem={storeData.store.find(i => i.hottest)}/>
          :
          <Home store={storeData.store} shouldDiscount={storeData.shouldDiscount} />
        }
      </div>
    </div>
  )
}

export default App;