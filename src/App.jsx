import Form from './components/form';
import List from './components/list';
import { useState } from 'react';
import './App.css';


function App() {

  const [listTransactions,setListTransactions] = useState([])

  const addList = (newItemList) => {
    setListTransactions([...listTransactions, newItemList])
  }

  return (
    <>
      <header>
          <h1>Nu Kenzie</h1>
          <button>Inicio</button>
      </header>
      <main>
        <section>
          <Form addList={addList}/>
          <div>
            <h3>Valor total:</h3>
            <p>O valor se refere ao saldo</p>
          </div>
        </section>
        <section>
          <div>
            <h3>Resumo financeiro</h3>
            <button>Todos</button>
            <button>Entradas</button>
            <button>Despesas</button>
          </div>
          <List listTransactions= {listTransactions} />
        </section>
      </main>
    </>
  );
}

export default App;
