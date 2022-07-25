import "./style.css";

const HeaderCard = ({ setFilter, listTransactions }) => {
  function filterEntrada() {
    const entrada = listTransactions.filter((elem) => elem.type === "Entrada");
    setFilter(entrada);
  }

  function filterDespesas() {
    const despesas = listTransactions.filter((elem) => elem.type !== "Entrada");
    setFilter(despesas);
  }

  function allCards() {
    setFilter(listTransactions);
  }

  return (
    <div className="header_list">
      <h3>Resumo financeiro</h3>
      <div className="header_button">
        <button onClick={() => allCards()} className="btnAll">
          Todos
        </button>
        <button onClick={() => filterEntrada()} className="btnEntrada">
          Entradas
        </button>
        <button onClick={() => filterDespesas()} className="btnSaida">
          Despesas
        </button>
      </div>
    </div>
  );
};

export default HeaderCard;
