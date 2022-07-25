import "./style.css";
import { FaTrash } from "react-icons/fa";

const Card = ({ elemento, filterList, setFilter }) => {
  function removeCard(elementoSelec) {
    const actualList = filterList.filter((elem) => elem !== elementoSelec);
    setFilter(actualList);
  }

  return (
    <div className="card_container">
      <div className={`background-${elemento.type}`}></div>
      <div className="card_title">
        <h3>{elemento.description}</h3>
        <span>{elemento.type}</span>
      </div>
      <div className="card_details">
        <p>R${elemento.value},00</p>
        <button className="removeCard" onClick={() => removeCard(elemento)}>
          <FaTrash className="trashIcon" />
        </button>
      </div>
    </div>
  );
};

export default Card;
