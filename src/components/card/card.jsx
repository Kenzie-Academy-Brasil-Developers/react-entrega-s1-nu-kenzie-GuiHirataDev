import { FaTrash } from 'react-icons/fa'

const Card = ({elem}) => {
    return (
        <div className="containerCards">
            <div>
                <h2>{elem.description}</h2>
                <p>{elem.type}</p>
            </div>
            <div className='valueTrash'>
                <span>R$ {elem.value},00</span>
                <button><FaTrash/></button>
            </div>
        </div>
    )
}

export default Card