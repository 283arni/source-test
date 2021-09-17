import classes from "./Header.module.css";
import ButtonBell from "../ButtonBell/ButtonBell";
import Popup from "../Popup/Popup";


const Header = () => {
  return (
    <header className={classes.header}>
      <span>Шапка</span>
      <ButtonBell/>
      <Popup/>
    </header>
  )
}

export default Header;
