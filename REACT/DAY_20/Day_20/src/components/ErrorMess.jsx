
function ErrorMess({foodItems}) {
  let emptyMess = foodItems.length === 0 && <h3>I am still hungry</h3>;
  return emptyMess;
}

export default ErrorMess;
