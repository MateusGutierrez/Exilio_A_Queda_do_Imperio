import styled from "styled-components";

export const StyledMap = styled.div`
        position: fixed;
        height: 100%;
        width: 100%;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5); 
        opacity: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        font-family: "Press Start 2P";
        .map{
            height: 55vh;
            width: 58vw;
            background: url(../../src/assets/mapa/mapEncruzilhada.svg);
            background-size: 100%;
            position: relative;
            border: transparent;
            border-radius: 20px;
        }
        .closeButton{
            background: transparent;
            color: white;
            cursor: pointer;
            border: none;
            position: absolute;
            font-family: "Press Start 2P";
            font-size: 16px;
            right: 10px;
            top: 10px;
        }
        .class{
            width: 27%;
            height: 100%;
        }
        .divContainer{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-top: 5%;
        }
        .heroImg{
            height: 100px;
            width: 80px;
            border-radius: 20px;
        }
        .inventarioTitle{
            width: 80%;
            margin: 0 auto;
            margin-top: 20px;
            margin-bottom: 10px;
        }
        .inventario{
            border: 1px solid white;
            width: 80%;
            height: 150px;
            margin: 0 auto;
        }
        .inventarioVazio{
            font-size: 10px;
            text-align: center;
        }
`