import classes from "./ButtonForm.module.css";


const ButtonForm = ({text, onButtonClick, isActive}) => {
  return (
    <button
      type='button'
      onClick={onButtonClick}
      className={classes.button}
      disabled={isActive}
    >
      {text}
    </button>
  )
}

export default ButtonForm;