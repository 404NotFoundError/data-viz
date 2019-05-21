import styled from 'styled-components';

const ZoomBtnStyled = styled.button`
    position: fixed;
    top: ${props => props.zoom ? "208px" : "242px"};
    z-index: 100;
    right: 40px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: none;
    opacity: 0.4;
    transition: 0.2s ease-in-out;
    outline: none;
    cursor: pointer;
 
    &:hover {
    	opacity: 1;
    }

    .traitHor {
        width: 10px;
        height: 1.2px;
        background: black;
        position: absolute;
        z-index: 10;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
    }
    .traitVer {
        width: 1.2px;
        height: 10px;
        background: black;
        position: absolute;
        z-index: 10;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
    }
`;

export default ZoomBtnStyled;