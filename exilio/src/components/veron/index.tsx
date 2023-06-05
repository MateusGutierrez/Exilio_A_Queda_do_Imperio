import { useContext } from "react"
import { ClassContext } from "../../providers/classContext"
import { StyledVeronModal } from "./style"

export const VeronModal = () => {
    const {handleCloseVeronModal} = useContext(ClassContext)
    return (
        <StyledVeronModal>
            <div className="veronContainer">
                <button onClick={handleCloseVeronModal} className="buttonClose">X</button>
                <p className="textVeron">Saudações viajante!
Me chamo Voren, sou um mercador que teve a casa invadida por uma aberração. 
Eu até gostaria de oferecer auxílio... Mas meus materiais estão na minha casa. Se você recuperar ela, vou te ajudar!!!</p>
            </div>
        </StyledVeronModal>
    )
}