import styled from "styled-components";

export const StyledCadaver = styled.div`
    position: relative;
    height: 100%;
    width: 300px;
    .divContainerCadaver{
        width: 300px;
        height: 80px;
        position: absolute;
        bottom: 0;
        display: flex;
        justify-content: end;
        align-items: first baseline;
        background-color:  rgba(0, 0, 0, 0.5);
        margin-bottom: 5px;
    }
    .closeButton{
        margin-top: 5px;
        background: transparent;
        color: white;
        cursor: pointer;
        border: none;
        font-family: "Press Start 2P";
        font-size: 16px;
    }
    .textCadaver{
        color: white;
        font-size: 10px;
        position: absolute;
        width: 80%;
        line-height: 16px;
        margin-left: 10%;
        bottom: 10px;
        text-align: center;
    }
`