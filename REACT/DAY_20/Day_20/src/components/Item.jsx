import style from "./Item.module.css";
const Item = ({ foodItem }) => {
  return (
    <li className={`list-group-item  ${style["list-item"]}`}>{foodItem}</li>
  );
};
export default Item;
