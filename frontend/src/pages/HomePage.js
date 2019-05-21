import React, { Component } from 'react';
import styled from "styled-components";
import HomeBtn from "../components/HomeBtn/HomeBtn";
import Logo from "../components/Logo/Logo";
import vid from "../static/videos/WinemakingCutted.mp4";
import AboutUs from '../components/AboutUs/AboutUs';
import { White } from '../helpers/const';

const HomePageStyled = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(180deg, #2D1563 -16%, #0F0422 100%);
    opacity: 0.99;
    overflow: hidden;

    .bgHome {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        z-index: -1;

        .video {
            position: absolute;
            width: 100vw;
            min-height: 100vh;
        }
        .overlay {
            position: absolute;
            width: 100vw;
            height: 100vh;
            z-index: 0;
            background: linear-gradient(180deg, #2D1563 -16%, #0F0422 100%);
            opacity: 0.6;
        }
    }
    .title {
        font-family: 'Karla', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 48px;
        line-height: 56px;
        letter-spacing: 0.04em;
        color: ${White};
    }
    .desc {
        font-family: 'Muli', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 182.85%;/* or 37px */
        text-align: center;
        color: ${White};
        width: 800px;
        margin: 80px;
    }
    .aPropos {
        display: inline;
        border: 1px solid ${White};
        box-sizing: border-box;
        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
        border-radius: 32px;
        font-family: 'Muli', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 18px;/* identical to box height */
        text-align: center;
        color: ${White};
        text-decoration: none;
        padding: 15px 40px;
        transition: .2s ease-in-out;
        margin: 0px 12px;
        cursor: pointer;

        &:hover {
            background: ${White};
            color: #30153E;
        }
    }
`;

class HomePage extends Component {
    state = {
        isModalOpen: false,
    }

    toggleModal = bool => {
        this.setState({
            isModalOpen: bool
        })
    }

    render() {
        const { isModalOpen } = this.state;

        return (
            <HomePageStyled>
                <Logo />
                <AboutUs isActive={isModalOpen} toggleModal={this.toggleModal}/>
                <div className="bgHome">
                    <video className='video' width="100vw" muted={true} loop={true} autoPlay={true}>
                        <source src={vid} type="video/mp4" />
                        Your browser does not support HTML5 video.
                    </video>
                    <div className="overlay"/>
                </div>
                <h1 className="title">What is a good wine ?</h1>
                <p className="desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat.
                </p>
                <div>
                    <div className="aPropos" onClick={() => this.toggleModal(true)}>À propos</div>
                    <HomeBtn name="Découvrir" url="/dataviz"/>
                </div>
            </HomePageStyled>
        );
    }
}

export default HomePage;