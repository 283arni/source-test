import classes from './App.module.css';
import Header from "../Header/Header";
import Form from "../Form/Form";

function App() {


  return (
    <>
      <Header/>
      <div className={classes.container}>
        <Form/>
      </div>
    </>
  );
}

export default App;
