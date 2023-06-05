import { useContext} from "react"
import { arrayOfClasses} from "../../data/classes/index"
import { StyledChoseClass } from "./style"
import { useNavigate } from "react-router-dom"
import { ClassContext } from "../../providers/classContext"
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const ChoseClass = () => {
    const navigate = useNavigate()
    const {registerClass} = useContext(ClassContext)

    return(
        <StyledChoseClass>
            <div className="choseClassContainer">
                <h1 className="choseClassTitle">Escolha sua classe</h1>
                <p onClick={() => navigate("/")} className="backButton">voltar</p>
            </div>
            <div className="classContainer">
                {
                    arrayOfClasses.map((hero) => {
                        return(
                            <div className="classHero" key={hero.id} id={`${hero.id}`} onClick={registerClass}>
                                <h2 className="heroName" id={`${hero.id}`}>{hero.class}</h2>
                                <img src={hero.img} alt="hero" className="heroImg" id={`${hero.id}`}/>
                            </div>
                        )
                    })
                }
            </div>
            <ToastContainer theme="dark" toastClassName="toast"/>
        </StyledChoseClass>
    )
}