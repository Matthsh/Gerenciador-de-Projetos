function SeuNome({ setNome }) {
    

    return(
        <div>
            <p>Digite o seu nome:</p>
            <input 
            type="text" 
            placeholder="Qual é o seu nome?" 
            onChange={(event) => setNome(event.target.value)}></input>
        </div>
    )
}

export default SeuNome