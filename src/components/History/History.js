import "./History.css";
import Animate from "../Slider";
const History = () => {
  return (
    <>
      <div className="history" id="history">
        <h1>
          <span className="number1">
            01<i className="fa-solid fa-square square"></i>
          </span>
          <span className="heading">History</span>
          <p>
            ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet nisi
            at elit venenatis fringilla. Cras ut semper quam, sit. ringilla.
            Cras ut semper quam, sit elit venenatis fringilla. Cras ut semper
            quam, sit.
          </p>
        </h1>
      </div>
      <Animate />
    </>
  );
};

export default History;
