import styled from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
export const StyledChoseClass = styled.div`
    background-color: black;
    height: 100vh;
    width: 100vw;
    color: white;
    font-family: "Press Start 2P";
    display: flex;
    flex-direction: column;
    .toast{
        font-family: "Press Start 2P";
        font-size: 10px;
    }
    .backButton{
        cursor: pointer;
    }
    .backButton:hover{
        color: #FFC000;
    }
    .choseClassContainer{
        display: flex;
        justify-content: space-between;
        width: 70%;
        margin: 0 auto;
        margin-top: 5%;
    }
    .choseClassTitle{
        text-align: center;
        font-style: normal;
        font-weight: 400;
        font-size: 38px;
        line-height: 38px;
        letter-spacing: 0.1em;
        margin-left: 15%;
    }
    .heroImg{
        width: 220px;
        border-radius: 30%;
    }
    .classContainer{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 70vw;
        margin: 0 auto;
        margin-top: 10%;
    }
    .classHero{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
    .classHero:hover{
        color: #FFC000;
        .heroImg{
            box-shadow: 0px 0px 5px 2px rgba(255,192,0,0.5);
        }
    }
`