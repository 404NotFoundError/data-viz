import styled from 'styled-components';
import { Turbo, White } from "../../../helpers/const";

const TasteFilterStyled = styled.ul`
    display: flex;
    flex-direction: column;

    .tasteListItem {
        display: flex;
        align-items: center;
        margin-left: 32px;
        margin-top: 16px;
        cursor: pointer;

        .tasteSVGContainer {
            width: 44px;
            height: 44px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.1);
            display: flex;
            justify-content: center;
            align-items: center;
            transition: 0.2s ease-in-out;

            svg {
                path {
                    transition: 0.2s ease-in-out;
                    fill: #9B94AA;
                }
            }
        }
        .tasteName {
            font-family: 'Karla', sans-serif;
            font-style: normal;
            font-weight: bold;
            font-size: 14px;
            line-height: 16px;
            letter-spacing: -0.04em;
            color: #9991A8;
            margin-left: 10px;
            margin-right: 52px;
            transition: 0.2s ease-in-out;
        }
        &:first-child {
            margin-top: 32px;
        }
        &:hover .tasteName {
            color: ${White};
        }
        &:hover .tasteSVGContainer {
            background: ${White};
        }
        &:hover svg path {
            fill: ${Turbo};
        }
    }
    .active {
        .tasteName {
            color: ${White} !important;
        }
        .tasteSVGContainer {
            background: ${White} !important;
        }
        svg path {
            fill: ${Turbo} !important;
        }
    }
`;

export default TasteFilterStyled;