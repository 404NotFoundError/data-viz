import React, { Component } from 'react';
import styled from 'styled-components';
import Logo from '../components/Logo/Logo';
import TasteSingle from "../components/TasteSingle/TasteSingle";
import { Red, White } from "../helpers/const";

const colors = {
    "red": Red,
    "white": "#FFE8B5",
    "pink": '#EE98AC'
}

const SinglePageStyled = styled.div`
    background: linear-gradient(180deg, #2D1563 -16%, #0F0422 100%);
    height: 100vh;

    .singleContainer {
        width: 70%;
        max-width: 989px;
        height: 100vh;
        background: ${White};
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;

        &__wrapper {
            .backBtn {
                display: flex;
                align-items: center;
                text-decoration: none;

                .arrow {
                    margin-right: 9px;
                }
                .text {
                    font-family: "Karla", sans-serif;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 12px;
                    line-height: 14px;
                    text-transform: uppercase;
                    color: #30153E;
                }
            }

            .name {
                font-family: "Karla", sans-serif;
                font-style: normal;
                font-weight: bold;
                font-size: 36px;
                letter-spacing: -0.04em;
                color: #2E133C;
                margin-top: 25px;
            }
            .localisation {
                display: flex;
                align-items: center;
                margin-top: 30px;

                &__country {
                    margin-left: 21px;
                    font-family: "Karla", sans-serif;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 22px;
                    letter-spacing: -0.04em;
                    color: #2E133C;
                }
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
            .priceContainer {
                display: flex;
                align-items: center;
                margin-top: 6px;

                .price {
                    font-family: "Muli", sans-serif;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 24px;
                    color: #000000;
                }
                .priceSuggest {
                    font-family: "Karla", sans-serif;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 15px;
                    letter-spacing: -0.04em;
                    color: #2E133C;
                    opacity: 0.5;
                    margin-left: 9px;
                }
            }
            .flavors {
                margin-top: 44px;
                display: flex;
            }
            .description {
                font-family: "Muli", sans-serif;
                font-style: normal;
                font-weight: normal;
                font-size: 20px;
                line-height: 28px;
                color: #2E133C;
                max-width: 600px;
                margin-top: 39px;
            }
            .variete {
                display: flex;
                margin-top: 6px;

                .wineColorDot {
                    width: 16px;
                    height: 16px;
                    border-radius: 50%;
                    background: ${props => props.color ? colors[props.color] : ''};
                    display: block;
                }
                &__name {
                    font-family: "Karla", sans-serif;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 18px;
                    letter-spacing: -0.04em;
                    color: #2E133C;
                    margin-left: 20px;
                }
            }
            .rate {
                display: flex;
                align-items: center;
                margin-top: 40px;

                .star {}
                .points {
                    font-family: "Karla", sans-serif;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 24px;
                    letter-spacing: -0.04em;
                    color: #2E133C;
                    margin-left: 11px;
                }
                .onWineEnthusiast {
                    font-family: "Karla", sans-serif;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 15px;
                    letter-spacing: -0.04em;
                    color: #2E133C;
                    opacity: 0.5;
                    margin-left: 8px;
                }
            }

        }
    }
`;

class SinglePage extends Component {
    state = {
        wine: []
    }

    componentDidMount() {
        this.init();
    }

    init = async () => {
        const wineURL = `https://wine.frb.io/api/wine/${parseInt(this.props.match.params.id)}`

        const wineRes = await fetch(wineURL);
        const { wine } = await wineRes.json();

        this.setState({
            wine
        })
    }

    render() {
        const { wine } = this.state;

        console.log(wine);

        if (!wine.name) return null;

        return (
            <SinglePageStyled color={wine.color}>
                <Logo />
                <div className="singleContainer">
                    <div className="singleContainer__wrapper">
                        <a className="backBtn" href="/dataviz">
                            <svg className="arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.84 10.92V12.92H7.84L13.34 18.42L11.92 19.84L4 11.92L11.92 4L13.34 5.42L7.84 10.92H19.84Z" fill="#30153E"/>
                            </svg>
                            <p className="text">back to map</p>
                        </a>
                        <h1 className="name">{wine.name.replace(/\s*\(.*\)\s*$/gm, "")}</h1>
                        <div className="localisation">
                            <img className="countryFlag" style={{width: 16, height: 16}} src={require(`../static/images/countries/${wine.country.toLowerCase()}.png`)} alt="Country flag" />
                            <p className="localisation__country">{wine.country}</p>
                        </div>
                        <div className="variete">
                            <div className="wineColorDot"/>
                            <p className="variete__name">{wine.variety}</p>
                        </div>
                        <p className="description">{wine.description}</p>
                        <div className="rate">
                            <svg className="star" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.09303 12.7003L4.18246 17.8836C4.11242 18.4439 4.32255 18.9342 4.74281 19.2845C4.95295 19.4946 5.30317 19.5646 5.58335 19.5646C5.79348 19.5646 6.00361 19.4946 6.21374 19.4246L10.9067 16.973L15.5997 19.4246C16.09 19.7047 16.6503 19.6347 17.0706 19.2845C17.4909 19.0043 17.701 18.4439 17.631 17.8836L16.7204 12.7003L20.5028 8.98796C20.853 8.63774 20.9931 8.07738 20.853 7.51703C20.7129 7.02672 20.2226 6.60645 19.7323 6.53641L14.479 5.76592L12.1675 1.00291C11.9574 0.512599 11.4671 0.232422 10.9067 0.232422C10.3464 0.232422 9.85605 0.512599 9.64591 1.00291L7.33445 5.76592L2.08113 6.53641C1.52078 6.60645 1.10051 6.95667 0.960421 7.51703C0.820332 8.00734 0.960421 8.56769 1.31064 8.98796L5.09303 12.7003ZM8.45516 8.49765C8.94547 8.42761 9.29569 8.14743 9.50583 7.72716L10.9067 4.85535L12.3076 7.72716C12.5177 8.14743 12.938 8.42761 13.3583 8.49765L16.5103 8.98796L14.2688 11.1593C13.9186 11.5096 13.7785 11.9298 13.8486 12.4201L14.4089 15.5721L11.6072 14.1012C11.1869 13.8911 10.6966 13.8911 10.2763 14.1012L7.47454 15.5721L8.0349 12.4201C8.10494 11.9999 7.96485 11.5096 7.61463 11.1593L5.30317 8.98796L8.45516 8.49765Z" fill="#F7C825"/>
                                <path d="M13.5833 7.57143L11.0833 2L8.58333 7.57143L4 8.42857L7.33333 11.8571L6.5 17L11.0833 14.4286L15.6667 17L14.8333 11.8571L19 8L13.5833 7.57143Z" fill="#F7C825"/>
                            </svg>
                            <p className="points">{wine.grade}</p>
                            <p className="onWineEnthusiast">on WineEnthusiast</p>
                        </div>
                        <div className="priceContainer">
                            <p className="price">{`${parseInt(wine.price)} $`}</p>
                            <p className="priceSuggest">suggested price</p>
                        </div>
                        <div className="flavors">
                        {wine.first_taste && (
                            <TasteSingle taste={wine.first_taste} />
                        )}
                        {wine.second_taste && (
                            <TasteSingle taste={wine.second_taste} />
                        )}
                        {wine.third_taste && (
                            <TasteSingle taste={wine.third_taste} />
                        )}
                        </div>
                    </div>
                </div>
            </SinglePageStyled>
        );
    }
}

export default SinglePage;