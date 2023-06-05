import { useContext } from "react"
import { ClassContext } from "../../providers/classContext"
import { StyledDestroiedBoat } from "./styled"
export const DestroiedBoat = () => {
    const {handleCloseBoat} = useContext(ClassContext)
    return(
        <StyledDestroiedBoat>
            <div className="boatContainer">
                <button onClick={handleCloseBoat} className="buttonCLose">X</button>
                <p className="textBoat">O barco está bem acabado...</p>
            </div>
        </StyledDestroiedBoat>
    )
}