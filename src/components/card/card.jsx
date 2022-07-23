const Card = ({elem}) => {
    return (
        <div>
            <div>
                <h2>{elem.description}</h2>
                <p>{elem.type}</p>
            </div>
            <div>
                <span>R$ {elem.value},00</span>
                <button>X</button>
            </div>
        </div>
    )
}

export default Card