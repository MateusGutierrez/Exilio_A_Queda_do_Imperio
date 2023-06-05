import styled from "styled-components";

export const StyledLetterEncruzilhada = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .letterContainer{
        background-color:  rgba(0, 0, 0, 0.5);
        width: 400px;
        height: 600px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .textLetter{
        margin-top: 25px;
        height: 400px;
        width: 300px;
        font-size: 14px;
        line-height: 24px;
    }
    .closeLetter{
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