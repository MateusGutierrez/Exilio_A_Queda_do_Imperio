import { useContext } from "react"
import { StyledEncruzilhada } from "./style"
import { ClassContext } from "../../providers/classContext"
import { MapModal } from "../../components/map/index"
import { CadaverModal } from "../../components/cadaverModal/index"
import { LetterEncruzilhada } from "../../components/letterEncruzilhada"
import { useNavigate } from "react-router-dom"


export const Encruzilhada = () => {
    const {handleOpenMap, showModalMap, showCadaver, handleOpenCadaver, handleOpenLetter, showLetter} = useContext(ClassContext)
    const navigate = useNavigate()
    return(
        <StyledEncruzilhada>
            <div className="container">
                <div className="setaE"></div>
                <div className="setaM" onClick={() => navigate("/cais")}></div>

                <div className="carta" onClick={handleOpenLetter}></div>
                {showLetter && (<LetterEncruzilhada/>)}

                <div className="setaD" onClick={() => navigate("/crepusculo")}></div>
                
                <div className="cadaver" onClick={handleOpenCadaver}></div>
                {showCadaver && (<CadaverModal/>)}

                <div className="mapa" onClick={handleOpenMap}></div>
                {showModalMap && (<MapModal />)}
            </div>
        </StyledEncruzilhada>
    )
}