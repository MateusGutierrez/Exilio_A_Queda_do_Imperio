import { StyledJourney } from "./style"
import { useNavigate } from "react-router-dom"
export const TheJourney = () => {
    const navigate = useNavigate()
    return(
        <StyledJourney>
            <div className="container">
                <h1 className="title">O início da jornada!</h1>
                <div className="textContainer">
                    <p className="text"><span>Nas</span> profundezas do reino Decadente de Eldoria, uma sombra ameaçadora se espalha sobre as terras outrora pacíficas.</p>
                    <p className="text"><span>A</span> escuridão corrompeu os Lordes que passaram a aterrorizar o povo. Estes Lordes malignos, alimentados por um poder sinistro, raptaram a princesa Aurora, a jovem e corajosa herdeira do trono de Eldoria.</p>
                    <p className="text"><span>Em</span> meio ao caos e ao desespero, um herói improvável emerge. Movido por um amor ardente pela princesa e uma coragem inata, o herói se prepara para enfrentar os Lordes corrompidos, trazendo a esperança de restaurar a paz ao reino e resgatar sua amada.</p>
                </div>
            <div className="nextButton" onClick={() => navigate("/encruzilhada")}></div>
            </div>
        </StyledJourney>
    )
}