import Form from './components/form';
import List from './components/list';
import { useState } from 'react';
import './App.css';


function App() {

  const [listTransactions,setListTransactions] = useState([])

  const addList = (newItemList) => {
    setListTransactions([...listTransactions, newItemList])
  }

  const totalValue = listTransactions.reduce((accumulator, actualValue) => {
    return parseInt(actualValue.value) + accumulator
  }, 0)

  const handleList = (item) => {
    const listFiltered = listTransactions.filter((elem) => (elem !== item))
    setListTransactions(listFiltered)
  }

  return (
    <div className='divPrincipal'>
      <header>
          <h1><span>Nu</span> Kenzie</h1>
          <button>Inicio</button>
      </header>
      <main className='container'>
        <section className='form'>
          <Form addList={addList}/>
          <div className='divTotalValue'>
            <h3>Valor total: <span className='totalValue'>$ {totalValue}</span></h3>
            <p>O valor se refere ao saldo</p>
          </div>
        </section>
        <section className='cards'>
          <div className='divCards'>
            <h3>Resumo financeiro</h3>
            <div className='divButtons'>
            <button>Todos</button>
            <button>Entradas</button>
            <button>Despesas</button>
            </div>
          </div>
          <List listTransactions= {listTransactions} handleList={handleList}/>
        </section>
      </main>
    </div>
  );
}

export default App;
