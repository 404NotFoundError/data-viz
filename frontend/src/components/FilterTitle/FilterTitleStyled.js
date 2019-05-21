import styled from "styled-components";
import { White } from "../../helpers/const";

const FilterTitleStyled = styled.div`
    display: flex;
    position: absolute;
    z-index: 10;
    top: 80px;
    left: 136px;

    .trait {
        width: 78.01px;
        left: 0px;
        height: 2px;
        background: #F7C825;
        top: calc(50% - 0px/2 + 1.51px);
        transform: rotate(-0.74deg);
        margin-top: 20px;
    }

    .rightContainer {
        display: flex;
        flex-direction: column;
        margin-left: 16px;

        .title {
            font-family: 'Karla', sans-serif;
            font-style: normal;
            font-weight: bold;
            font-size: 36px;
            line-height: 42px;
            letter-spacing: -0.04em;
            color: ${White};
        }
        .winesNumber {
            font-family: 'Muli', sans-serif;
            font-style: normal;
            font-weight: 300;
            font-size: 12px;
            line-height: 15px;
            color: rgba(255, 255, 255, 0.7);
        }
    }
`;

export default FilterTitleStyled;