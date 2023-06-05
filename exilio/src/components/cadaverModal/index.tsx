import { useContext } from "react"
import { ClassContext } from "../../providers/classContext"
import { StyledCadaver } from "./style"
export const CadaverModal = () => {
    const {handleCloseCadaver} = useContext(ClassContext)
    return(
        <StyledCadaver>
            <div className="divContainerCadaver">
                <button onClick={handleCloseCadaver} className="closeButton">X</button>
            </div>
            <p className="textCadaver">Um cadáver dilacerado... não parecem ser ferimentos de batalha...</p>
        </StyledCadaver>
    )
}