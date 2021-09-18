import classes from "./Amount.module.css";

const Amount = ({length}) => {
  return (
    <div className={classes.amount}>
      <span>{length}</span>
    </div>
  )
}

export default Amount;
