import styled from 'styled-components';
import { Fog, Turbo } from '../../../helpers/const';

const PriceFilterStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0px 12px;

    .marks {
        font-family: 'Karla', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 14px;
        text-align: center;
        color: ${Fog};
        width: 25px;
    }

    .rc-slider-handle {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: ${Turbo};
        border: none !important;
        transform: translateX(2px);
        outline: none;
    }
    .rc-slider-track {
        background: ${Turbo};
    }
    .rc-slider-vertical .rc-slider-track,
    .rc-slider-vertical .rc-slider-rail {
        width: 2px;
    }
`;

export default PriceFilterStyled;