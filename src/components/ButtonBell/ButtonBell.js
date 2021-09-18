import classes from "./ButtonBell.module.css";
import bell from "../../assets/bell.png";
import Amount from "../Amount/Amount";
import {useDispatch, useSelector} from "react-redux";
import {actionsCreator} from "../../reducer";

const selectEvents = state => state.events;

const ButtonBell = () => {
  const events = useSelector(selectEvents);
  const dispatch = useDispatch()
  const readEvents = events.filter(item => !item.isRead).length;

  const handleTogglePopup = () => {
    dispatch(actionsCreator.togglePopup());
    dispatch(actionsCreator.readAllEvents());
  }

  return (
    <button
      type='button'
      className={classes.button}
      onClick={handleTogglePopup}
    >
      <img src={bell} height={50} alt="Колокольчик"/>
      {readEvents ?
        <Amount
          length={readEvents}
        />
        : null
      }
    </button>
  )
}

export default ButtonBell;
