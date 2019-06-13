import styled from "styled-components";
import { Blackcurrant, White } from "../../helpers/const";

export const CountryModalStyled = styled.div`
    height: 100vh;
    width: 352px;
    z-index: 1000;
    position: absolute;
    top: 0;
    right: -352px;
    transform: ${props => props.isCountryOpen ? 'translateX(-352px)' : 'translateX(0px)'};
    transition: transform 0.4s ease-in-out;
    background: ${White};

   .CountryModal {
       position: relative;
       width: 100%;
       height: 100%;
       display: flex;
       flex-direction: column;
       padding: 32px 36px 32px 32px;
       box-sizing: border-box;

        &__closeBtn {
            position: absolute;
            top: 32px;
            right: 36px;
            cursor: pointer;
        }
    }

    .current{
        font-size:16px;
        font-weight:bold;
    }
    .container{
        font-family: 'Muli', sans-serif;
        font-style: normal;
        & li{
            margin:25px 0px;
            display: flex;
            align-items: center;
            & .bestWines{
                flex-basis:85%;
                float:right;
            }
        }
        .wineList{
            justify-content: space-between;
        }
    }
    .varietyList {
        overflow: scroll;
        height: 200px;
        margin-top: 10px;

        &::-webkit-scrollbar {
            display: none;
        }

        &::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
            border-radius: 10px;
        }

        &::-webkit-scrollbar-thumb {
            border-radius: 10px;
            -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
        }
    }
`;

export const Title = styled.h3`
    font-family: 'Karla', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    text-align: left;
    letter-spacing: -0.04em;
    color: ${Blackcurrant};
`;

export const Subtitle = styled.h4`
    font-family: 'Muli', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 15px;
    color: ${Blackcurrant};
`;

