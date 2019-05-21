import styled from 'styled-components';
import { Blackcurrant, White } from '../../helpers/const';

const AboutUsStyled = styled.div`
    display: ${props => props.isActive ? 'block' : 'none'};
    position: absolute;
    z-index: 100;
    width: 592px;
    height: 490px;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    background: ${White};
    box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.07);
    border-radius: 3px;

    a {
        text-decoration: none;
        color: black;
    }

    .crossSVG {
        position: absolute;
        top: 14px;
        right: 16px;
        cursor: pointer;
    }
    .logoSVG {
        margin-top: 46px;
        margin-bottom: 6px;
    }
    .AboutUs {
        &__container {
            position: relative;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        &__title {
            font-family: 'Karla', sans-serif;
            font-style: normal;
            font-weight: bold;
            font-size: 48px;
            line-height: 56px;
            text-align: center;
            letter-spacing: -0.04em;
            color: ${Blackcurrant};
            margin-bottom: 4px;
        }
        &__subtitle {
            font-family: 'Muli', sans-serif;
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 23px;/* identical to box height */
            text-align: center;
            color: ${Blackcurrant};
        }
        &__trait {
            width: 64px;
            height: 2px;
            background: #F7C825;
            margin-top: 31px;
            margin-bottom: 58px;
        }
        &__names {
            font-family: 'Muli', sans-serif;
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 182.85%;/* or 33px */
            text-align: center;
            color: ${Blackcurrant};
            margin-bottom: 54px;
        }
        &__link {}
        &__linkBlue_title {
            font-family: Muli;
            font-style: normal;
            font-weight: 600;
            font-size: 17px;
            line-height: 182.85%;/* identical to box height, or 31px */
            text-align: center;
            color: ${Blackcurrant};
            margin-bottom: 4px;
        }
        &__linkBlue {
            img {
                width: 64px;
                height: 25px;
            }
        }
        &__bold {
            font-weight: bold;
        }
    }
`;

export default AboutUsStyled;