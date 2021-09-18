import ButtonForm from "../ButtonForm/ButtonForm";
import classes from './Form.module.css'
import {useDispatch, useSelector} from "react-redux";
import {actionsCreator} from "../../reducer";
import {useState} from "react";

const selectPopup = state => state.popup;

const Form = () => {
  const [text, setText] = useState('')
  const dispatch = useDispatch();
  const popup = useSelector(selectPopup)

  const handleTextChange = (e) => {
    const value = e.target.value;
    setText(value)
  }

  const handleNewEventClick = (e) => {
    const date = new Date();

    const event = {
      text: text,
      isRead: popup,
      date: date.toLocaleDateString()
    }

    dispatch(actionsCreator.addNewEvent(event))
    setText('')
  }

  const handleToggleClick = () => {
    dispatch(actionsCreator.togglePopup())
    dispatch(actionsCreator.readAllEvents())
  }

  const handleClearEventsClick = () => {
    dispatch(actionsCreator.clearEvents())
  }

  const handleReadEventsClick = () => {
    dispatch(actionsCreator.readAllEvents())
  }

  return (
    <form className={classes.form}>
      <div className={classes.main}>
        <input
          type="text"
          value={text}
          placeholder='Введите название события...'
          onChange={handleTextChange}
        />
        <ButtonForm
          text={'Пометить все события прочитанными'}
          onButtonClick={handleReadEventsClick}
        />
        <ButtonForm
          text={'Удалить все события'}
          onButtonClick={handleClearEventsClick}
        />
        <ButtonForm
          text={'Показать/Убрать попап нотификаций (toggle btn)'}
          onButtonClick={handleToggleClick}
        />
      </div>
      <ButtonForm
        text={'Отправить'}
        onButtonClick={handleNewEventClick}
        isActive={!text.length}
      />
    </form>
  )
}

export default Form;