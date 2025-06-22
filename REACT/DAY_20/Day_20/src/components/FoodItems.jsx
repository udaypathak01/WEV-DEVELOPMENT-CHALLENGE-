import Item from "./Item";
function FoodItems({ foodItems }) {
  return (
    <ul className="list-group">
      {foodItems.map((item) => (
        <Item foodItem={item} key={item} />
      ))}
    </ul>
  );
}
export default FoodItems;
