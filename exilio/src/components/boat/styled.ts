import styled from "styled-components";

export const StyledDestroiedBoat = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .boatContainer{
        background-color:  rgba(0, 0, 0, 0.5);
        width: 300px;
        height: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .textBoat{
        text-align: center;
        margin-top: 100px;
    }
    .buttonCLose{
        margin-top: 5px;
        background: transparent;
        color: white;
        cursor: pointer;
        border: none;
        font-family: "Press Start 2P";
        font-size: 16px;
        align-self: flex-end;
    } 
`