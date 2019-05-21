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