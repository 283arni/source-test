import classes from "./ButtonBell.module.css";
import bell from "../../assets/bell.png";
import Amount from "../Amount/Amount";


const ButtonBell = () => {
  return (
    <button type='button' className={classes.button}>
      <img src={bell} height={50} alt="Колокольчик"/>
      <Amount/>
    </button>
  )
}

export default ButtonBell;
