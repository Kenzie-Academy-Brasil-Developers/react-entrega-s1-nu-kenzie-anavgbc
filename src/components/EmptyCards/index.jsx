import NoCard from "../../NoCard.svg";
import "./style.css";

const EmptyCard = () => {
  return (
    <>
      <h3>Você ainda não possui nenhum lançamento</h3>
      <div className="NoCard">
        <img src={NoCard} alt="" />
      </div>
    </>
  );
};

export default EmptyCard;
