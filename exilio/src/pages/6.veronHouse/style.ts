import styled from "styled-components";

export const StyledVeronHouse = styled.div`
    height: 76vh;
    width: 58vw;
    color: white;
    font-family: "Press Start 2P";
    .veronHouseContainer{
        height: 76vh;
        width: 58vw;
        background-image: url(../../src/assets/cenário/veronHouseWE.svg);
        background-size: 80vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
    }
    .fight{
        height: 25px;
        width: 80px;
        border: 1px solid white;
        position: absolute;
        left: 12%;
        bottom: 35%;
        cursor: pointer;
    }
    .back{
        height: 50px;
        width: 50px;
        position: absolute;
        bottom: 15px;
        right: 22px;
        cursor: pointer;
    }
`