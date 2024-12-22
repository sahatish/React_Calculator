import Display from "./components.jsx/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import Styles from "./App.module.css";

function App() {
  return (
    <div className={Styles.calculator}>
      <Display></Display>
      <ButtonsContainer></ButtonsContainer>
    </div>
  );
}

export default App;
