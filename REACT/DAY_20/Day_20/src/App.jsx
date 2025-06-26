import FoodItems from "./components/FoodItems";
import ErrorMess from "./components/ErrorMess";
import { Container } from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";
function App() {
  let [foodItems, setfoodItems] = useState([]);

  let handleOnKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      let newItems = [...foodItems, newFoodItem];
      setfoodItems(newItems);
      event.target.value=''
    }
  };

  return (
    <Container>
      <center>
        <h1>Food Items</h1>
        <FoodInput handleOnKeyDown={handleOnKeyDown} />
        <ErrorMess foodItems={foodItems}></ErrorMess>
      </center>
      <FoodItems foodItems={foodItems}></FoodItems>
    </Container>
  );
}

export default App;
