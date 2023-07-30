function Item({item, shouldDiscount}) {

    return (
        <div>{item.item}: {shouldDiscount ? item.price * item.discount : item.price}</div>
    );
  }
  
  export default Item;