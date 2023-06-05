import { useNavigate } from "react-router-dom"
import { StyledVeronHouse } from "./style"
export const VeronHouse = () => {
    const navigate = useNavigate()
    return(
        <StyledVeronHouse>
            <div className="veronHouseContainer">
                <div className="fight"></div>
                <div className="back" onClick={() => navigate("/gameOverGarrick")}></div>
            </div>
        </StyledVeronHouse>
    )
}