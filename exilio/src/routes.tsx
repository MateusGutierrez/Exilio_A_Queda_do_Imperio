import { Route, Routes, Navigate } from "react-router-dom"
import { HomePage } from "./pages/home"
import { ChoseClass } from "./pages/1.choseClassPage"
import { TheJourney } from "./pages/2.theJourney"
import { Encruzilhada } from "./pages/3.encruzilhada"
import { Cais } from "./pages/5.Cais"
import { Crepusculo } from "./pages/6.crepusculoEldoria"
import { Veron } from "./pages/6.Veron"
import { VeronHouse } from "./pages/6.veronHouse"
import {GameOverGarrick} from "./pages/gameOver/index"

export const MainRoute = () => {
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/class" element={<ChoseClass/>}/>
            <Route path="/journey" element={<TheJourney/>}/>

            <Route path="/encruzilhada" element={<Encruzilhada/>}/>

            <Route path="/cais" element={<Cais/>}/>

            <Route path="/crepusculo" element={<Crepusculo/>}/>
            <Route path="/veron" element={<Veron/>}/>
            <Route path="/veron_house" element={<VeronHouse/>}/>
            <Route path="/gameOverGarrick" element={<GameOverGarrick/>}/>
            <Route path="/home" element={<Navigate to="/"/>}/>
            <Route path="/personagem" element={<Navigate to="/"/>}/>
        </Routes>
    )
}