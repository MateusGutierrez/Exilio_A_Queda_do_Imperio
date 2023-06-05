import styled from "styled-components";

export const StyledPier = styled.div`
    height: 78vh;
    width: 58vw;
    color: white;
    font-family: "Press Start 2P";
    .backgroundPier{
        background: url(../../src/assets/cenário/cais.svg);
        height: 78vh;
        width: 58vw;
        background-size: cover;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
    }
    .boat{
        width: 400px;
        height: 250px;
        cursor: pointer;
        position: absolute;
        bottom: 0;
        left: 0;
    }
    .back{
        position: absolute;
        right: 5px;
        text-align: end;
        cursor: pointer;
    }
`