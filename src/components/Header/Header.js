import classes from "./Header.module.css";
import ButtonBell from "../ButtonBell/ButtonBell";
import Popup from "../Popup/Popup";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {eventsMock} from "../../date";
import {actionsCreator} from "../../reducer";

const selectPopup = state => state.popup;
const selectEvents = state => state.events;


const Header = () => {
  const popup = useSelector(selectPopup);
  const events = useSelector(selectEvents);

  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      const date = new Date()

      const event = {
        text: eventsMock[Math.floor(Math.random() * eventsMock.length)],
        isRead: popup,
        date: date.toLocaleDateString()
      }

      dispatch(actionsCreator.addNewEvent(event))
    }, 5000)
    return () => clearTimeout(timer)
  }, [events, dispatch, popup])

  return (
    <header className={classes.header}>
      <span>Шапка</span>
      <ButtonBell/>
      {popup ?
        <Popup/>
        : null
      }
    </header>
  )
}

export default Header;
