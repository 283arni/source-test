import classes from './Item.module.css';


const Item = () => {
  return (
    <li className={classes.item}>
      <span className={classes.event}>Супер дела</span>
      <span className={classes.date}>вчера</span>
    </li>
  )
}

export default Item;
