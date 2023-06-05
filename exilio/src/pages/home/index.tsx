import { StyledHome } from "./style"
import { useNavigate } from "react-router-dom"

export const HomePage = () => {
    const navigate = useNavigate()
    return(
        <StyledHome>
            <div className="back_img_home">
                <div className="title_container">
                    <h1 className="title_first_name">Exílio</h1>
                    <h2 className="title_second_name">A Queda do Império</h2>
                </div>
                <h1 className="play" onClick={() => navigate("/class")}>Jogar</h1>
            </div>
        </StyledHome>
    )
}