function Landing({user, hottestItem}) {
    return (
        <div className="landing">
            Welcome, {user}. 
            The hottest item is {hottestItem.item} for {hottestItem.price}
        </div>
    );
  }
  
  export default Landing;