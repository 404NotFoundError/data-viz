import styled from "styled-components";
import { White } from "../../helpers/const";

const HomeBtnStyled = styled.a`
    border: 1px solid ${White};
    box-sizing: border-box;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
    border-radius: 32px;
    font-family: 'Muli', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;/* identical to box height */
    text-align: center;
    color: ${White};
    text-decoration: none;
    padding: 15px 40px;
    transition: .2s ease-in-out;
    margin: 0px 12px;

    &:hover {
        background: ${White};
        color: #30153E;
    }
`;

export default HomeBtnStyled;