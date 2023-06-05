import { useNavigate } from "react-router-dom"
import { StyledTwilight } from "./styled"
export const Crepusculo = () => {
    const navigate = useNavigate()
    return(
        <StyledTwilight>
            <div className="twilight">
                <div className="forward" onClick={() => navigate("/veron")}></div>
                <div className="back" onClick={() => navigate("/encruzilhada")}></div>
            </div>
        </StyledTwilight>
    )
}