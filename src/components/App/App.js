import classes from './App.module.css';
import {useSelector} from "react-redux";
import Header from "../Header/Header";

const selectEvents = state => state.events;

function App() {
  const events = useSelector(selectEvents)
  console.log(events)
  return (
    <div className={classes.container}>
      <Header/>
    </div>
  );
}

export default App;
