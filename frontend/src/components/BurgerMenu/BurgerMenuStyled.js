import styled from "styled-components";
import { White } from "../../helpers/const";

const BurgerMenuStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    position: absolute;
    z-index: 10;
    top: 40px;
    right: 40px;
    height: 10px;
    cursor: pointer;

    .traitLarge {
        width: 40px;
        border: 1px solid ${White};
    }
    .traitSmall {
        width: 24px;
        border: 1px solid ${White};
    }
`;

export default BurgerMenuStyled;