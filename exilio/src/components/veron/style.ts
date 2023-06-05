import styled from "styled-components"
export const StyledVeronModal = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .veronContainer{
        background-color:  rgba(0, 0, 0, 0.5);
        width: 350px;
        height: 400px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .textVeron{
        margin-top: 40px;
        height: 400px;
        width: 300px;
        font-size: 14px;
        line-height: 24px;
    }
    .buttonClose{
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