function Saudacao({ nome }) {

    function umaSaudacao(umNome){
        return `Ola ${umNome}!!!`
    }
    return (
        <>
            {nome && <p>
                {umaSaudacao(nome)}
            </p>}
        </>
    )
}

export default Saudacao