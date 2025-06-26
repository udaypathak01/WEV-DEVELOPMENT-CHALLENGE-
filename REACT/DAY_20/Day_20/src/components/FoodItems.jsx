import { useState } from "react";
import Item from "./Item";
function FoodItems({ foodItems }) {
  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (event, item) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
  };
  return (
    <ul className="list-group">
      {foodItems.map((item) => (
        <Item
          foodItem={item}
          bought={activeItems.includes(item)}
          key={item}
          handleBuy={(event) => onBuyButton(event, item)}
        />
      ))}
    </ul>
  );
}
export default FoodItems;
