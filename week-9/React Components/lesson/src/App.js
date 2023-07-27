function SignUp (){
    return <div>registration form</div>
}

function Blurb (){
  return <div>Blurb</div>
}

function About() {
  return (
    <>
      <SignUp /> 
      <Blurb />
    </>
  )
}

function Nav() {
  return (
      <div id="nav">
          <span>Home</span>
          <span>About</span>
      </div>
  )
}

function LandingPage() {
  return <h1>Welcome!</h1>
}

function App() {
  let isUserLoggedIn = localStorage.getItem('loggedIn')
  let componentToDisplay = isUserLoggedIn ?
      <LandingPage /> :
      <About />

  return (
      <div className="app">
          <Nav />
          {componentToDisplay}
      </div>
  )
}

export default App;
