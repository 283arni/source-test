import classes from './Item.module.css';


const Item = ({item}) => {
  return (
    <li className={classes.item}>
      <span className={classes.event}>{item.text}</span>
      <span className={classes.date}>{item.date}</span>
    </li>
  )
}

export default Item;
