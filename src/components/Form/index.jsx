import { useState } from "react";
import "./style.css";

const Form = ({ setFilter }) => {
  const [descriptionInput, setDescriptionInput] = useState("");
  const [valueInput, setValueInput] = useState("");
  const [typeInput, setTypeInput] = useState("Entrada");

  const data = {
    description: descriptionInput,
    type: typeInput,
    value: Number(valueInput),
  };
  function createItem() {
    data.type !== "Entrada"
      ? (data.value = -data.value)
      : (data.value = Number(valueInput));

    setFilter((oldList) => [...oldList, data]);
  }

  return (
    <div className="container_Form">
      <form onClick={(event) => event.preventDefault()}>
        <div className="form_description">
          <label htmlFor="description">Descrição</label>
          <input
            type="text"
            className="inputDescription"
            placeholder="Digite aqui sua descrição"
            value={descriptionInput}
            name="description"
            onChange={(event) => setDescriptionInput(event.target.value)}
          />
          <span className="spanDescription">Ex: Compra de roupas</span>
        </div>
        <div className="formInf">
          <div className="form_value">
            <label htmlFor="value">Valor</label>
            <input
              type="number"
              value={valueInput}
              className="inputValue"
              name="value"
              placeholder="0"
              onChange={(event) => setValueInput(event.target.value)}
            />
          </div>
          <div className="form_type">
            <label htmlFor="type">Tipo de valor</label>
            <select
              name="type"
              id=""
              value={typeInput}
              className="inputSelect"
              placeholder="teste"
              onChange={(event) => setTypeInput(event.target.value)}
            >
              <option>Entrada</option>
              <option>Despesa</option>
            </select>
          </div>
        </div>

        <button onClick={() => createItem()} className="btnInsert">
          Inserir valor
        </button>
      </form>
    </div>
  );
};

export default Form;
