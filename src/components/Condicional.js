import { useState } from 'react'

function Condicional() {

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(event) {
        event.preventDefault()
        setUserEmail(email)
    }

    function limparEmail() {
        setUserEmail("email limpo");
    }

    return (
        <div>
            <h2>Cadastre o seu Email: </h2>
            
            <form>
                <input
                    type="email"
                    placeholder="Digite seu email"
                    onChange={(event) => setEmail(event.target.value)} />
                
                <button
                    type="submit"
                    onClick={enviarEmail}>
                    Enviar Email
                </button>
                
                /** renderização condicional */
                {userEmail && ( //bloco do if
                    <div>
                        <p>O email do usuário é {userEmail} </p>
                        <button onClick={limparEmail}>Limpar Email</button>
                    </div>
                )}
            </form>

        </div>
    )
}

export default Condicional