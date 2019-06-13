import styled from "styled-components";

const ColorsFilterItemStyled = styled.div`
    /* border: ${props => props.isActive ? '1px solid rgba(255, 255, 255, 1)' : '1px solid  rgba(255, 255, 255, 0)'}; */
    background-color:${
    props => props.isActive ?
        props.color == "#D71140" ? "rgba(215, 17, 64, 0.3)" : props.color == "#ffffff" ? "rgba(250, 208, 178, 0.3)" : "rgba(238, 152, 172, 0.3)"
        : "none"
    };
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 16px;
    transition: 0.2s ease-in-out;
    &:hover {
        /* border: 1px solid rgba(255, 255, 255, 1); */
        background-color : ${props => props.color == "#D71140" ? "rgba(215, 17, 64, 0.3)" : props.color == "#fff" ? "rgba(250, 208, 178, 0.3)" : "rgba(238, 152, 172, 0.3)"};
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