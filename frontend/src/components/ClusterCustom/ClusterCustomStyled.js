import styled from "styled-components";
import { Red, White } from "../../helpers/const";

export const ClusterCustomStyled = styled.div`
    height: 60px;
    width: 60px;
    border-radius: 50%;
    border: 1px solid ${White};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${White};
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
        color: ${Red};
        border: 1px solid ${Red};
    }
`;

export const NumberOfWines = styled.h4`
`;