import styled from "styled-components";

export const Root = styled.div`
    background: rgba(219, 211, 237, 0.5);
    border-radius: 39.5px;
    width: 179px;
    height: 69px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-right: 10px;

    .iconContainer {
        background: #DBD3ED;
        border-radius: 50%;
        width: 44px;
        height: 44px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%) translateX(14px);
    }

    .tasteName {
        font-family: "Karla", sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        letter-spacing: -0.04em;
        color: #30153E;
    }
`;