import styled from "styled-components";

export const StyledTwilight = styled.div`
    height: 76vh;
    width: 58vw;
    color: white;
    font-family: "Press Start 2P";
    .twilight{
        height: 76vh;
        width: 58vw;
        background-image: url(../../src/assets/cenário/crepusculo.svg);
        background-size: 80vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
    }
    .forward{
        width: 50px;
        height: 50px;
        cursor: pointer;
        position: absolute;
        left: 95px;
        top: 51%;
    }
    .back{
        width: 50px;
        height: 50px;
        cursor: pointer;
        position: absolute;
        bottom: 15px;
        right: 25px;
    }
`