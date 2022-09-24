function OutraLista({ items }) {
    return(
        <>
            <h3>Lista de coisas boas:</h3>
            {items.length > 0 ? //if ternário
                (
                    items.map((item, index) => (
                        <p key={index}>{item}</p>
                    )))
                : ( //else ternário
                    <p>Não há itess na lista</p>
                )
            }
        </>
    )
}

export default OutraLista