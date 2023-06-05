import styled from 'styled-components';

export const StyledHome = styled.div`
    height: 80vh;
    width: 60vw;
    color: white;
    font-family: "Press Start 2P";
    .back_img_home{
        height: 80vh;
        background: url(../../src/assets/mapa/darkCastle.png);
        background-size: 80vh;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .title_container{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 180px;
        margin-bottom: 85px;
    }
    .title_first_name{
        font-style: normal;
        font-weight: 400;
        font-size: 38px;
        line-height: 38px;
        letter-spacing: 0.05em;
    }
    .title_second_name{
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 24px;
        letter-spacing: 0.05em;
    }
    .play{
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        line-height: 26px;
        letter-spacing: 0.1em;
        cursor: pointer;
    }
    .play:hover{
        color: #FFC000;
    }
`
