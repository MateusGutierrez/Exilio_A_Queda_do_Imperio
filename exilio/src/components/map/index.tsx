import { useContext} from "react"
import { ClassContext } from "../../providers/classContext"
import { StyledMap } from "./style"
import { arrayOfClasses } from "../../data/classes"
export const MapModal = () => {
    const {handleCloseMap, inventario} = useContext(ClassContext)
    const id = localStorage.getItem("@CLASSID")
    return(
        <StyledMap>
            <div className="map">
                <button onClick={handleCloseMap} className="closeButton">X</button>
                <div className="class">
                {
                arrayOfClasses.map((hero) => {
                    if(hero.id === Number(id)){
                        return(
                            <div className="divContainer">
                                <img src={hero.img} alt={hero.class} className="heroImg"/>
                                <p className="heroName">{hero.class}</p>
                            </div>
                        )
                    }
                }
                )}
                <p className="inventarioTitle">Inventáro</p>
                <div className="inventario">
                    { inventario.length === 0 ? (
                        <p className="inventarioVazio">Inventário vazio</p>
                    ) : (
                        <p>Você tem intens no inventário</p>
                    )}
                </div>
                </div>
            </div>
        </StyledMap>
    )
}