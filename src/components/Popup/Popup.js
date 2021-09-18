import classes from './Popup.module.css';
import Item from "../Item/Item";
import {useDispatch, useSelector} from "react-redux";
import {actionsCreator} from "../../reducer";

const selectEvents = state => state.events;

const Popup = () => {
  const events = useSelector(selectEvents)
  const dispatch = useDispatch();

  return (
    <div className={classes.popup}>
      <ul className={classes.list}>
        {
          events.map(item => {
            return (
              <Item
                key={item.text.substring(0, 10) + Math.random() * 1000}
                item={item}
              />
            )
          }).slice(0, 5)}
      </ul>
      <button
        className={classes.link}
        onClick={() => dispatch(actionsCreator.togglePopup())}
      >
        посмотреть все....
      </button>
    </div>
  )
}

export default Popup;
