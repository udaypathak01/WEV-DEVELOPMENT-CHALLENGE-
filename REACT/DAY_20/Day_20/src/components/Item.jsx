import style from "./Item.module.css";
const Item = ({ foodItem,handleBuy, bought }) => {
  
  return (
    <li
      className={`list-group-item  ${style["list-item"]} ${bought && "active"}`}
    >
      {foodItem}
      <button className="Buy_btn btn btn-info" onClick={handleBuy}>
        Buy
      </button>
    </li>
  );
};
export default Item;
