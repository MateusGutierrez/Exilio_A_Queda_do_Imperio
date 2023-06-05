import { useContext } from "react"
import { ClassContext } from "../../providers/classContext"
import { StyledLetterEncruzilhada } from "./style"
export const LetterEncruzilhada = () => {
    const {handleCloseLetter} = useContext(ClassContext)
    return(
        <StyledLetterEncruzilhada>
            <div className="letterContainer">
                <button onClick={handleCloseLetter} className="closeLetter">X</button>
                <p className="textLetter"> Não acredito que isso aconteceu! Justo no nosso último dia em alto-mar. Um monstro marinho aterrorizante emergiu das profundezas do oceano e atacou nosso barco com uma violência indescritível. Eu vi a tripulação ser devorada, consegui escapar mas estou muito ferido! A criatura destruiu o nosso barco e acho que está me procurando, eu posso ouví-la... Se alguém encontrar esta carta, NÃO NAVEGUE POR ESTAS ÁGUAS!</p>
            </div>
        </StyledLetterEncruzilhada>
    )
}