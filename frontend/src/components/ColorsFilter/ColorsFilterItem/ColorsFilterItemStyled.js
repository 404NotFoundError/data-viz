import styled from "styled-components";

const ColorsFilterItemStyled = styled.div`
    border: ${props => props.isActive ? '1px solid rgba(255, 255, 255, 1)' : '1px solid  rgba(255, 255, 255, 0)'};
    border-radius: 50%;
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 16px;
    transition: 0.2s ease-in-out;
    &:hover {
        border: 1px solid rgba(255, 255, 255, 1);
        cursor: pointer;
    }

    .coloredDiv {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: ${props => props.color};
    }
`;

export default ColorsFilterItemStyled;