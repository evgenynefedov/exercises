import Article from "./Article";

function Wardrobe(props) {
  return (
    <div>
      {props.wardrobe
        .filter(a => a.color == "blue")
        .map(a => <Article article={a} />)
      }
    </div>
  );
}

export default Wardrobe;