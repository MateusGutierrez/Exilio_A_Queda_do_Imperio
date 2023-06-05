import { useNavigate } from "react-router-dom"
import { StyledGameOverGarrik } from "./styled"
export const GameOverGarrick = () => {
    const navigate = useNavigate()
    return(
        <StyledGameOverGarrik>
            <div className="gameOverContainer">
                <p className="title">GAME OVER</p>
                <p className="text">Ao tentar sair, Garrick enfurecido com sua invasão o golpeou pelas costas causando um ferimento mortal...</p>
                <div className="back" onClick={() => navigate("/encruzilhada")}></div>
            </div>
        </StyledGameOverGarrik>
    )
}