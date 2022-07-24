import Card from "../card/card"

const List = ({listTransactions, handleList}) => {

    return (
            <>
                {listTransactions.map((elem,index) => {
                    return <Card elem={elem} key={index} handleList={handleList}/>
                })}
            </>
    )
}

export default List