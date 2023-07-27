import Wardrobe from "./components/Wardrobe";

function App() {
  let wardrobe = [
    { type: "shirt", color: "red", size: "Medium" },
    { type: "shirt", color: "blue", size: "Medium" },
    { type: "pants", color: "blue", size: "Medium" },
    { type: "accessory", color: "sapphire", size: "" },
    { type: "accessory", color: "lilac", size: "" }
  ]
  return (
    <div>
      <Wardrobe wardrobe={wardrobe} />
    </div>
  );
}

export default App;
