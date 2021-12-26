import classes from "./bar.module.css";

function Bar({ arr }) {
  return (
    <div className={classes["bar-container"]}>
      {arr.map((el, index) => (
        <div
          key={index}
          style={{
            height: `${el * 5 + 20}px`,
          }}
          className={classes.bar}
        ></div>
      ))}
    </div>
  );
}

export default Bar;
