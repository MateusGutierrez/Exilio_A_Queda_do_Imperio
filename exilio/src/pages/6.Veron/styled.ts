import styled from "styled-components"

export const StyldedVeron = styled.div`
    height: 76vh;
    width: 58vw;
    color: white;
    font-family: "Press Start 2P";
    .veronHouse{
        height: 76vh;
        width: 58vw;
        background-image: url(../../src/assets/cenário/Veron.svg);
        background-size: 80vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
    }
    .forward{
        width: 50px;
        height: 50px;
        position: absolute;
        top: 455px;
        left: 328px;
        cursor: pointer;
    }
    .citizen{
        width: 120px;
        height: 200px;
        cursor: pointer;
        position: absolute;
        right: 110px;
        bottom: 25px;
    }
    .back{
        width: 50px;
        height: 50px;
        position: absolute;
        right: 15px;
        bottom: 15px;
        cursor: pointer;
    }
`