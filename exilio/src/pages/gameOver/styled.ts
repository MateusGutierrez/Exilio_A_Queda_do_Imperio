import styled from "styled-components";

export const StyledGameOverGarrik = styled.div`
    height: 76vh;
    width: 58vw;
    color: white;
    font-family: "Press Start 2P";
    .gameOverContainer{
        height: 76vh;
        width: 58vw;
        background-image: url(../../src/assets/gameOver/gameover.png);
        background-size: 80vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
    }
    .title{
        color: red;
        font-size: 32px;
    }
    .text{
        width: 80%;
        background-color: black;
        text-align: center;
        line-height: 26px;
        opacity: 75%;
    }
    .back{
        width: 50px;
        height: 50px;
        position: absolute;
        cursor: pointer;
        background-image: url(../../src/assets/setas/setaE.svg);
        bottom: 5%;
        right: 5%;
    }
`