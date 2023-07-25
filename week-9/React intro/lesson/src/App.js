import './App.css';

function exercise1(){
  let companies = [
    { name: "Tesla", revenue: 140 },
    { name: "Microsoft", revenue: 300 },
    { name: "Google", revenue: 600 }
  ]

  const showCompany = (name, revenue) => { 
    return (<div key={name} id={name}>{name} makes {revenue} every year</div>)
  }

  return (
    <div className="ex-space">
      <h4 className='ex-title'>Exercise 1</h4>
      <div className="exercise" id="ex-1">
        {companies.map(c => showCompany(c.name, c.revenue))}
      </div>
    </div>
  )
}

function exercise2(){
  const getClassName = (temperature) => {
    let weatherClass
    if(temperature < 15){
      weatherClass = "freezing"
    } else if(temperature < 30){
      weatherClass = "fair"
    } else {
      weatherClass = "hell-scape"
    }
    return weatherClass
  }

  return (
    <div className="ex-space">
      <h4 className='ex-title'>Exercise 2</h4>
      <div className="exercise" id="ex-2">
        <div id="weatherBox" className={getClassName(20)}></div>
      </div>
    </div>
  )
}

function App() {
  //return exercise1()
  return exercise2()
}

export default App;