import Card from "../card/card"

const List = ({listTransactions}) => {

    return (
            <>
                {listTransactions.map((elem,index) => {
                    return <Card elem={elem} key={index} />
                })}
            </>
    )
}

export default List