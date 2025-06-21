function Hello() {
  let myName = "Shrivalli";
  let table = () => {
   return 2+2;
  };
  return (
    <h3>
      hello this is dynamic {myName} , funciton call- {table()}
    </h3>
  );
}

export default Hello;
