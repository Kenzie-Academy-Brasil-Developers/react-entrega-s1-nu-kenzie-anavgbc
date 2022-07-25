import { useState } from "react";
import List from "./components/List";
import Form from "./components/Form";
import TotalMoney from "./components/TotalMoney";
import "./App.css";
import "./reset.css";
import NuKenzie from "./NuKenzie.svg";
import NuKenzieDark from "./NuKenzieDark.svg";

import landingPage from "./image.svg";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  function Login() {
    setLoggedIn((oldSetLoggedIn) => !oldSetLoggedIn);
  }

  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "Entrada", value: 2500 },
    { description: "Conta de luz", type: "Despesa", value: -150 },
    { description: "PIX", type: "Entrada", value: 150 },
    { description: "Shopee", type: "Despesa", value: 53 },
  ]);

  const [filterList, setFilter] = useState([...listTransactions]);

  return (
    <div className="App">
      <main>
        {isLoggedIn ? (
          <div className="main_Home">
            <header className="header_Home">
              <div className="container_header">
                <img src={NuKenzieDark} className="logoHome" alt="" />
                <button className="btnLogout" onClick={() => Login()}>
                  Inicio
                </button>
              </div>
            </header>
            <div className="container_home">
              <div className="home_info">
                <Form setFilter={setFilter} />
                <TotalMoney filterList={filterList} />
              </div>
              <List
                listTransactions={listTransactions}
                filterList={filterList}
                setFilter={setFilter}
              />
            </div>
          </div>
        ) : (
          <div className="main_LandingPage">
            <div className="container_LandingPage">
              <div className="Inf_landingPage">
                <img src={NuKenzie} alt="" />
                <h2>Centralize o controle das suas finanças</h2>
                <p>de forma rápida e segura</p>
                <button onClick={() => Login()}>Iniciar</button>
              </div>
              <img className="hidden" src={landingPage} alt="" />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
