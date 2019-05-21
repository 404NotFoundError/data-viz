import styled from "styled-components";
import { White } from "../../../helpers/const";

const ActiveFilterStyled = styled.div`
    color: ${White};
    display: ${props => props.isActive ? 'flex' : 'none'};
    font-family: 'Muli', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;/* identical to box height */
    color: ${White};
    border: 1px solid ${White};
    box-sizing: border-box;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
    border-radius: 32px;
    width: 102px;
    height: 34px;
    position: relative;
    cursor: pointer;
    opacity: 0.5;
    transition: 0.2s ease-in-out;
    margin-right: 8px;
    
    &:hover {
        opacity: 1;
    }

    .filter {
        position: absolute;
        top: 50%;
        left: 16px;
        transform: translateY(-50%);
    }
    
    svg {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 12px;
    }
`;

export default ActiveFilterStyled;