import styled from "styled-components";

export const StyledEncruzilhada = styled.div`
    height: 76vh;
    width: 58vw;
    color: white;
    font-family: "Press Start 2P";
    .container{
        height: 76vh;
        width: 58vw;
        background-image: url(../../src/assets/cenário/encruzilhada.svg);
        background-size: 80vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
    }
    .setaE{
        width: 35px;
        height: 35px;
        position: absolute;
        left: 25%;
        top: 53%;
        cursor: pointer;
    }
    .setaD{
        width: 35px;
        height: 35px;
        cursor: pointer;
        position: absolute;
        right: 6%;
        top: 53%;
    }
    .setaM{
        width: 35px;
        height: 35px;
        cursor: pointer;
        position: absolute;
        top: 53%;
        right: 46.5%;
    }
    .carta{
        width: 35px;
        height: 35px;
        cursor: pointer;
        position: absolute;
        top: 48%;
        right: 32%;
    }
    .cadaver{
        width: 70px;
        height: 70px;
        position: absolute;
        bottom: 110px;
        cursor: pointer;
    }
    .mapa{
        width: 50px;
        height: 50px;
        background: url(../../src/assets/inventario/bag.png);
        background-size: contain;
        cursor: pointer;
        position: absolute;
        top: 5%;
        left: 5%;
    }
`