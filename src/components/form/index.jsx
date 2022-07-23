import { useState } from "react"

const Form = ({addList}) => {

    const [inputValue, setInputValue] = useState(0)
    const [inputDescription, setInputDescriptions] = useState("")
    const [selectType, setSelectType] = useState("")

    return (
        <form onSubmit={(event) => (event.preventDefault())}>
            <input 
            type="number"
            placeholder="0" 
            onChange={(event) => setInputValue(event.target.value)}
            />
            <input 
            type="text" 
            placeholder="Digite aqui sua descrição"
            onChange={(event) => setInputDescriptions(event.target.value)}
            />
            <select name="select" id="select"  onChange={(event) => setSelectType(event.target.value)}>
                <option value="">Escolha uma opção</option>
                <option value="Entrada">Entrada</option>
                <option value="Saída">Saída</option>
            </select>
            <button onClick={() => addList({value: inputValue, description: inputDescription, type: selectType})}>Inserir valor</button>
        </form>
    )
}

export default Form