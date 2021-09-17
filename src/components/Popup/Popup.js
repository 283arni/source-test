import classes from './Popup.module.css';
import Item from "../Item/Item";

const Popup = () => {
  return (
    <div className={classes.popup}>
      <ul className={classes.list}>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
      </ul>
      <a className={classes.link} href="/">посмотреть все....</a>
    </div>
  )
}

export default Popup;
