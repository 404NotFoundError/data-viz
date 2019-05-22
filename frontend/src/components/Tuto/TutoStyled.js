import styled from "styled-components";
import { Turbo } from "../../helpers/const";

const TutoStyled = styled.div`
    display: ${props => (props.step >= 3) ? 'none' : 'block'};
    position: absolute;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
    cursor: none;

    p {
        font-family: 'Caveat', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 23px;
        color: ${Turbo};
    }
        
    .tutoContainer {
        &__markers {
            display: flex;
            top: calc(50% - 158px);
            left: calc(50% + 90px);
            position: absolute;
            align-items: center;

            svg {
            }
            p {
                width: 169px;
                transform: translateY(-18px) translateX(10px);
            }
        }
        
        &__filters {
            display: flex;
            top: calc(50% - 160px - 30px);
            left: 100px;
            position: absolute;
            align-items: center;

            &__svgContainers {
                display: flex;
                flex-direction: column;
                margin-right: 19px;
                
                svg {
                    margin: 16px 0px;
                }
                .arrow1, .arrow2 {
                    transform: rotate(90deg);
                }
                .arrow3, .arrow4 {
                    transform: scaleY(-1) rotate(90deg);
                }
            }
            p {
                width: 92px;
            }
        }
        
        &__colors {
            display: flex;
            top: calc(50% + 124px);
            left: 100px;
            position: absolute;
            align-items: center;
            
            svg {
                margin-right: 19px;
                transform: scaleY(-1) rotate(90deg);
            }
            p {
                width: 92px;
            }
        }
    }
`;

export default TutoStyled;