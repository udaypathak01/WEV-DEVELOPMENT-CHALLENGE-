import FoodItems from "./components/FoodItems";
import ErrorMess from "./components/ErrorMess";
function App() {
let foodItems = ["Dal", "Roti", "Chawal", "sabji", "Paneer"];

  return (
    <>
      <h1>Fragments</h1>
      <ErrorMess foodItems={foodItems}></ErrorMess>
      <FoodItems foodItems={foodItems}></FoodItems>
    </>
  );
}

export default App;
