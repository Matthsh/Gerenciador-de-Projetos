import Item from './Item'

function List() {
    return (
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca="Ferrari" />
                <Item marca="Shevi" ano_lancamento={1985} />
                <Item marca="Renault" ano_lancamento={1964} />
                <Item marca="Mercedes" ano_lancamento={1998} />
            </ul>
        </>
    )
}

export default List