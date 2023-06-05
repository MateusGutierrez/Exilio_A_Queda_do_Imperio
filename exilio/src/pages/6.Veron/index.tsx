import { useContext } from "react"
import { StyldedVeron } from "./styled"
import { useNavigate } from "react-router-dom"
import { ClassContext } from "../../providers/classContext"
import { VeronModal } from "../../components/veron"
export const Veron = () => {
    const navigate = useNavigate()
    const {helpVeron, handleOpenVeronModal} = useContext(ClassContext)
    return(
        <StyldedVeron>
            <div className="veronHouse">
                <div className="forward" onClick={() => navigate("/veron_house")}></div>
                <div className="citizen" onClick={handleOpenVeronModal}></div>
                {helpVeron && <VeronModal/>}
                <div className="back" onClick={() => navigate("/crepusculo")}></div>
            </div>
        </StyldedVeron>
    )
}