import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

interface IClassContext{
    registerClass:  React.MouseEventHandler<HTMLDivElement>;
    showModalMap: false | true;
    handleOpenMap: () => void;
    handleCloseMap: () => void;
    inventario: IInventario[] | [];
    handleOpenCadaver: () => void;
    handleCloseCadaver: () => void;
    showCadaver: false | true;
    showLetter: false | true;
    handleOpenLetter: () => void;
    handleCloseLetter: () => void;
    showModalBoat: false | true;
    handleOpenBoat: () => void;
    handleCloseBoat: () => void;
    helpVeron: false | true;
    handleOpenVeronModal: () => void;
    handleCloseVeronModal: () => void;
}

interface IClassProviderProps{
    children: React.ReactNode
}
interface IInventario{
    name: string;
    id: number;
}

export const ClassContext = createContext({} as IClassContext)

export const ClassProvider = ({children}: IClassProviderProps) => {
    const navigate = useNavigate()
    const [showModalMap, setShowModalMap] = useState(false)
    const [showCadaver, setShowCadaver] = useState(false)
    const [showLetter, setShowLetter] = useState(false)
    const [showModalBoat, setShowModalBoat] = useState(false)
    const [helpVeron, setHelpVeron] = useState(false)
    const [inventario, setInventario] = useState<IInventario[] | []>([])

    useEffect(() => {
        const id = localStorage.getItem("@CLASSID")
        if(!id){
            navigate("/")
        }
    },[])

    const handleOpenVeronModal = () => {
        setHelpVeron(true)
    }

    const handleCloseVeronModal = () => {
        setHelpVeron(false)
    }

    const handleOpenBoat = () => {
        setShowModalBoat(true)
    }

    const handleCloseBoat = () => {
        setShowModalBoat(false)
    }
    const handleOpenLetter = () => {
        setShowLetter(true)
    }

    const handleCloseLetter = () => {
        setShowLetter(false)
    }
    
    
    const handleOpenCadaver = () => {
        setShowCadaver(true)
    }

    const handleCloseCadaver = () => {
        setShowCadaver(false)
    }

    const handleOpenMap = () => {
        setShowModalMap(true)
    }
    const handleCloseMap = () => {
        setShowModalMap(false)
    }
    const registerClass: React.MouseEventHandler<HTMLDivElement> = (e) => {
        const target = e.currentTarget;
        const id = target.id
        localStorage.setItem("@CLASSID", id)
        toast.success("Classe escolhida com sucesso!", { autoClose: 1500 });
        setTimeout(()=>{
            navigate("/journey")
        }, 2500)
    }
    return (
        <ClassContext.Provider value={{ handleOpenVeronModal,handleCloseVeronModal,helpVeron, handleOpenBoat,handleCloseBoat,showModalBoat,handleCloseLetter, handleOpenLetter , showLetter,inventario, registerClass,handleCloseMap,handleOpenMap,showModalMap,handleCloseCadaver,handleOpenCadaver, showCadaver}}>
            {children}
        </ClassContext.Provider>
    )
}