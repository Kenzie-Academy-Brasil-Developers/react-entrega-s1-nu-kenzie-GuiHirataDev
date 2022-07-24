import { useState } from "react"

const Form = ({addList}) => {

    const [inputValue, setInputValue] = useState(0)
    const [inputDescription, setInputDescriptions] = useState("")
    const [selectType, setSelectType] = useState("")

    return (
        <form onSubmit={(event) => (event.preventDefault())}>
            <label htmlFor="description">Descrição</label>
            <br/>
            <input 
            id="description"
            type="text" 
            placeholder="Digite aqui sua descrição"
            onChange={(event) => setInputDescriptions(event.target.value)}
            />
            <p>Ex: Compra de roupas</p>
            <br/>
            <label htmlFor="user">Valor</label>
            <br/>
            <input
            id="user" 
            type="number"
            placeholder="Insira um valor" 
            onChange={(event) => setInputValue(event.target.value)}
            />
            <label htmlFor="select">Tipo de valor</label>
            <select name="select" id="select"  onChange={(event) => setSelectType(event.target.value)}>
                <option value="">Escolha uma opção</option>
                <option value="Entrada">Entrada</option>
                <option value="Despesa">Despesa</option>
            </select>
            <button onClick={() => addList({value: inputValue, description: inputDescription, type: selectType})}>Inserir valor</button>
        </form>
    )
}

export default Form