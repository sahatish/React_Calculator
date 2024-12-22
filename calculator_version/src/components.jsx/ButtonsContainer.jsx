import styles from "./ButtonsContainer.module.css"
const ButtonsContainer = () => {
  const buttonNames = [
    "C",
    "1",
    "2", 
    "+", 
    "4",
    "-", 
    "5", 
    "6", 
    "*", 
    "7",
    "8",
    "/",
    "=",
    "9", 
    "0"];

  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map((buttonName) => (
        <button className={Styles.buttons}>C</button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
