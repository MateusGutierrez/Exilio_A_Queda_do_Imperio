import { useContext } from "react"
import { StyledPier } from "./styled"
import { ClassContext } from "../../providers/classContext"
import { DestroiedBoat } from "../../components/boat"
import { useNavigate } from "react-router-dom"
export const Cais = () => {
    const {showModalBoat, handleOpenBoat } = useContext(ClassContext)
    const navigate = useNavigate()
    return (
        <StyledPier>
            <div className="backgroundPier">
                <div className="boat" onClick={handleOpenBoat}></div>
                <p className="back" onClick={() => navigate("/encruzilhada")}>voltar</p>
                {showModalBoat && (<DestroiedBoat/>)}
            </div>
        </StyledPier>
    )
}