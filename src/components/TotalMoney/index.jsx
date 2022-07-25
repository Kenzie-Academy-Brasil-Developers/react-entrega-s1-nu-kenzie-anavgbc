import "./style.css";

const TotalMoney = ({ filterList }) => {
  const total = filterList.reduce((previousValue, currentValue) => {
    return currentValue.value + previousValue;
  }, 0);

  return (
    <div className="totalMoney">
      <div className="totalMoney_info">
        <div className="totalMoney_value">
          <h3>Valor total:</h3>
          <p>$ {total}</p>
        </div>
        <span>O valor se refere ao saldo</span>
      </div>
    </div>
  );
};

export default TotalMoney;
