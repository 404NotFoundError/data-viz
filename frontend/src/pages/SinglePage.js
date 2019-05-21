import React, { Component } from 'react';
import styled from 'styled-components';
import Logo from '../components/Logo/Logo';
import BurgerMenu from '../components/BurgerMenu/BurgerMenu';
import data from '../helpers/mockups/wines';
import { Red, White } from "../helpers/const";

const colors = {
    "red": Red,
    "white": White,
    "pink": 'pink'
}

const SinglePageStyled = styled.div`
    background: linear-gradient(180deg, #2D1563 -16%, #0F0422 100%);
    height: 100vh;

    .singleContainer {
        width: 86%;
        height: 80%;
        background: #E5E5E5;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        box-sizing: border-box;
        padding: 80px 70px;
        display: flex;
        justify-content: space-between;

        .backBtn {
            position: absolute;
            top: 20px;
            left: 20px;
            display: flex;
            align-items: center;
            text-decoration: none;

            .arrow {
                margin-right: 9px;
            }
            .text {
                font-family: 'Muli', sans-serif;
                font-style: normal;
                font-weight: bold;
                font-size: 12px;
                line-height: 15px;
                color: #B2B2B2;
            }
        }

        .left {
            width: 75%;

            .name {
            font-family: 'Karla', sans-serif;
            font-style: normal;
            font-weight: bold;
            font-size: 48px;
            line-height: 56px;
            }
            .localisation {
                font-family: 'Karla', sans-serif;
                font-style: normal;
                font-weight: bold;
                font-size: 18px;
                line-height: 21px;
                letter-spacing: 0.06em;
                color: #B2B2B2;
                margin: 6px 0px;
            }
            .date {
                font-family: 'Muli', sans-serif;
                font-style: normal;
                font-weight: bold;
                font-size: 48px;
                color: transparent;
                -webkit-text-stroke-width: 0.1px;
                -webkit-text-stroke-color: rgb(0, 0, 0);
            }
            .flavors {
                margin: 80px 0px 20px 0px;
            }
            .description {
                font-family: 'Karla', sans-serif;
                font-style: normal;
                font-weight: normal;
                font-size: 24px;
                line-height: 37px;
                letter-spacing: -0.03em;
                color: #000000;
                max-width: 733px;
            }
        }
        .right {
            display: flex;
            align-items: center;
            display: flex;
            align-items: flex-start;
            width: 25%;

            .variete {
                display: flex;
                margin-top: 10px;

                .wineColorDot {
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    background: ${props => props.color ? colors[props.color] : ''};
                    display: block;
                }
                .name {
                    font-family: 'Muli', sans-serif;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 24px;
                    line-height: 30px;/* identical to box height */
                    color: #000000;
                    margin: 0px 41px 0px 11px;
                }
            }
            .rate {
                display: flex;
                flex-direction: column;
                align-items: center;
                /* justify-content: space-around; */
                border-radius: 1px;
                /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
                position: relative;
                background: ${White};
                width: 55px;
                height: 57px;
                
                &::before {
                    border-top: 14px solid ${White};
                    border-left: 27.5px solid transparent;
                    border-right: 27.5px solid transparent;
                    content: "";
                    left: 0;
                    position: absolute;
                    bottom: -14px;
                }

                .star {
                    margin: 10px 0px 6px 0px;
                }
                .points {
                    font-family: 'Muli', sans-serif;
                    font-style: normal;
                    font-weight: 800;
                    font-size: 18px;
                    line-height: 23px;
                    color: #000000;
                    top: 0;
                    right: 0;
                }
            }
        }
    }
`;

class SinglePage extends Component {
    state = {
        wineId: this.props.match.params.id,
        wine: data.filter(wine => parseInt(wine.id_vin) === parseInt(this.props.match.params.id))[0],
    }

    render() {
        const { wine } = this.state;

        return (
            <SinglePageStyled color={wine.couleur}>
                <Logo />
                <BurgerMenu />
                <div className="singleContainer">
                    <a className="backBtn" href="/dataviz">
                        <svg className="arrow" width="21" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.89647 0.336883L0.112565 5.56646C2.61336e-06 5.66575 -2.51998e-07 5.76505 -2.56339e-07 5.86434C-2.57785e-07 5.89744 -2.60679e-07 5.96364 -2.62126e-07 5.99674C-2.63573e-07 6.02984 -2.65019e-07 6.06294 -2.67913e-07 6.12913C-2.72253e-07 6.22843 0.0562837 6.32772 0.112565 6.42702L4.89647 11.6566C5.17788 11.9876 5.85326 12.0869 6.41607 11.9214C6.97888 11.7559 7.14773 11.3587 6.86632 11.0277L2.25125 5.99674L6.86632 0.965755C7.14773 0.63477 6.97888 0.237586 6.41607 0.0720935C5.85326 -0.0933994 5.17788 0.0389959 4.89647 0.336883Z" fill="#B2B2B2"/>
                            <path d="M2.81824 6H20.0001" stroke="#B2B2B2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p className="text">retour à la dataviz</p>
                    </a>
                    <div className="left">
                        <h1 className="name">{wine.nom_vin}</h1>
                        <p className="localisation">LIEUX</p>
                        <p className="date">{wine.date_fabrication}</p>
                        <p className="flavors">FLAVORS</p>
                        <p className="description">{wine.description}</p>
                    </div>
                    <div className="right">
                        <div className="variete">
                            <span className="wineColorDot"/>
                            <p className="name">{wine.variete}</p>
                        </div>
                        <div className="rate">
                            <svg className="star" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.09303 12.7003L4.18246 17.8836C4.11242 18.4439 4.32255 18.9342 4.74281 19.2845C4.95295 19.4946 5.30317 19.5646 5.58335 19.5646C5.79348 19.5646 6.00361 19.4946 6.21374 19.4246L10.9067 16.973L15.5997 19.4246C16.09 19.7047 16.6503 19.6347 17.0706 19.2845C17.4909 19.0043 17.701 18.4439 17.631 17.8836L16.7204 12.7003L20.5028 8.98796C20.853 8.63774 20.9931 8.07738 20.853 7.51703C20.7129 7.02672 20.2226 6.60645 19.7323 6.53641L14.479 5.76592L12.1675 1.00291C11.9574 0.512599 11.4671 0.232422 10.9067 0.232422C10.3464 0.232422 9.85605 0.512599 9.64591 1.00291L7.33445 5.76592L2.08113 6.53641C1.52078 6.60645 1.10051 6.95667 0.960421 7.51703C0.820332 8.00734 0.960421 8.56769 1.31064 8.98796L5.09303 12.7003ZM8.45516 8.49765C8.94547 8.42761 9.29569 8.14743 9.50583 7.72716L10.9067 4.85535L12.3076 7.72716C12.5177 8.14743 12.938 8.42761 13.3583 8.49765L16.5103 8.98796L14.2688 11.1593C13.9186 11.5096 13.7785 11.9298 13.8486 12.4201L14.4089 15.5721L11.6072 14.1012C11.1869 13.8911 10.6966 13.8911 10.2763 14.1012L7.47454 15.5721L8.0349 12.4201C8.10494 11.9999 7.96485 11.5096 7.61463 11.1593L5.30317 8.98796L8.45516 8.49765Z" fill="#F7C825"/>
                                <path d="M13.5833 7.57143L11.0833 2L8.58333 7.57143L4 8.42857L7.33333 11.8571L6.5 17L11.0833 14.4286L15.6667 17L14.8333 11.8571L19 8L13.5833 7.57143Z" fill="#F7C825"/>
                            </svg>
                            <p className="points">{wine.points}</p>
                        </div>
                    </div>
                </div>
            </SinglePageStyled>
        );
    }
}

export default SinglePage;