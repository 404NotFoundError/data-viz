import styled from "styled-components";
import { Red, White } from "../../helpers/const";

export const ClusterCustomStyled = styled.div`
    color: ${White};
    cursor: pointer;
    transition: 0.2s ease-in-out;
    transform: translateY(50%);
    position: relative;

    &:hover {
        .pieChart {
            background: rgba(255, 255, 255, 0.2);
        }
    }

    .pieChart {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        border-radius: 50%;

        transition: 0.2s ease-in-out;

        border: ${props => props.isColored ? "none" : "1px solid white"};
    }
`;

export const NumberOfWines = styled.h4`
    font-family: 'Karla', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    letter-spacing: -0.04em;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
`;