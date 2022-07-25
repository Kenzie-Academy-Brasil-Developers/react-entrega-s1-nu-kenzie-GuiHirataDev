import Form from '../form';
import List from '../list';
import { useState } from 'react';
import Image from '../imgs/image.png'
import style from './style.module.css'

const MainContent = ({init, SetInit, SetInitFalse}) => {

    const [listTransactions,setListTransactions] = useState([])

    const addList = (newItemList) => {
    setListTransactions([...listTransactions, newItemList])
    }

    const totalValue = listTransactions.reduce((accumulator, actualValue) => {
    if(actualValue.type === "Entrada"){
      return parseInt(actualValue.value) + accumulator
    } else if(actualValue.type === "Despesa"){
      return accumulator - actualValue.value
    }
    
    }, 0)

    const handleList = (item) => {
    const listFiltered = listTransactions.filter((elem) => (elem !== item))
    setListTransactions(listFiltered)
    }

    //Filtro não funciona muito bem, pois está setando uma nova lista e perdendo a antiga, mas como era uma parte extra do projeto, não dei muito foco para esta parte

    const entryFilter = () => {
    const listEntry = listTransactions.filter((elem) => (elem.type === "Entrada"))
    setListTransactions(listEntry)
    }

    const expensesFilter = () => {
    const listExpenses = listTransactions.filter((elem) => (elem.type === "Despesa"))
    setListTransactions(listExpenses)
    }

    return (
        init ? 
        <div className={style.divPrincipal}>
        <header>
            <h1><span>Nu</span> Kenzie</h1>
            <button onClick={() => SetInitFalse()}>Inicio</button>
        </header>
        <main className={style.container}>
        <section className={style.form}>
            <Form addList={addList}/>
            <div className={style.divTotalValue}>
                <h3>Valor total: <span className={style.totalValue}>$ {totalValue}</span></h3>
                <p>O valor se refere ao saldo</p>
            </div>
            </section>
            <section className={style.cards}>
            <div className={style.divCards}>
                <h3>Resumo financeiro</h3>
                <div className={style.divButtons}>
                <button>Todos</button>
                <button onClick={() => entryFilter()}>Entradas</button>
                <button onClick={() => expensesFilter()}>Despesas</button>
                </div>
            </div>
            <List listTransactions= {listTransactions} handleList={handleList}/>
            </section>
        </main>
        </div>
        :
        <main className={style.mainInit}>
            <div className={style.initContent}>
                <h2><span>Nu</span> Kenzie</h2>
                <p className={style.pContent}>Centralize o controle das suas finanças</p>
                <p className={style.pDescription}>de forma rápida e segura.</p>
                <button onClick={() => SetInit()}>Iniciar</button>
            </div>
            <div className={style.initImg}>
                <img src={Image}/>
            </div>
        </main>
        
    )
}

export default MainContent