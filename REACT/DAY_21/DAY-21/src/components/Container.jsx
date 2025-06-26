import style from "./Container.module.css";
export function Container(props) {
  return <div className={style.Container}>{props.children}</div>;
}
