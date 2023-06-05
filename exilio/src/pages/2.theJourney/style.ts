import styled from 'styled-components';

export const StyledJourney = styled.div`
    height: 80vh;
    width: 60vw;
    color: white;
    font-family: "Press Start 2P";
    .container{
        height: 80vh;
        background-image: url(../../src/assets/cenário/journey.png) ;
        background-size: 80vh;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .title{
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 25px;
        letter-spacing: 0.1em;
        margin-top: 5%;
    }
    .textContainer{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .text{
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
        letter-spacing: 0.2em;
        width: 70%;
        background-color:  rgba(0, 0, 0, 0.5);
    }
    span{
        margin-left: 10%;
    }
    .nextButton{
        width: 50px;
        height: 50px;
        align-self: self-end;
        margin-right: 15%;
        background: url(../../src/assets/setas/setaE.svg);
        cursor: pointer;
    }
`