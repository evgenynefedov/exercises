import Item from "./Item";

function Home({store, shouldDiscount}) {

    return (
        <div>
            {store.map(item => <Item item={item} shouldDiscount={shouldDiscount} />)}
        </div>
    );
  }
  
  export default Home;