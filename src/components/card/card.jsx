import { FaTrash } from 'react-icons/fa'
import style from '../mainContent/style.module.css'

const Card = ({elem, handleList}) => {
    return (
        <div className={elem.type === "Entrada" ? style.containerCardsEntry : style.containerCards}>
            <div>
                <h2>{elem.description}</h2>
                <p>{elem.type}</p>
            </div>
            <div className={style.valueTrash}>
                <span>R$ {elem.value},00</span>
                <button onClick={() => handleList(elem)}><FaTrash/></button>
            </div>
        </div>
    )
}

export default Card