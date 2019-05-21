import React from 'react';
import AboutUsStyled from './AboutUsStyled';
import kaggle from "../../static/images/kaggle.png";
import { Red } from "../../helpers/const";

const AboutUs = ({isActive, toggleModal}) => (
    <AboutUsStyled isActive={isActive}>
        <div className="AboutUs__container">
            <svg onClick={() => toggleModal(false)} className="crossSVG" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#30153E"/>
            </svg>
            <svg className="logoSVG" width="34" height="39" viewBox="0 0 34 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10.9607" cy="5.83014" r="4.83014" stroke={Red} strokeOpacity="0.504" strokeWidth="2"/>
                <circle cx="5.83014" cy="14.9251" r="4.83014" stroke={Red} strokeOpacity="0.504" strokeWidth="2"/>
                <circle cx="16.7908" cy="14.9251" r="4.83014" stroke={Red} strokeOpacity="0.504" strokeWidth="2"/>
                <circle cx="27.285" cy="14.9251" r="4.83014" stroke={Red} strokeOpacity="0.504" strokeWidth="2"/>
                <circle cx="10.9607" cy="24.0202" r="4.83014" stroke={Red} strokeOpacity="0.504" strokeWidth="2"/>
                <circle cx="21.9213" cy="24.0202" r="4.83014" stroke={Red} strokeOpacity="0.504" strokeWidth="2"/>
                <circle cx="16.6003" cy="33.1699" r="4.83014" stroke={Red} strokeOpacity="0.504" strokeWidth="2"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M22.1802 1.0813C22.1802 1.08129 22.1802 1.08129 22.1802 1.08129C19.8829 0.741729 17.7452 2.32883 17.4057 4.62617C17.0661 6.92352 18.6532 9.06116 20.9505 9.40072C23.2479 9.74028 25.3855 8.15318 25.7251 5.85584C25.7292 5.82805 25.733 5.80028 25.7366 5.77254L21.5777 5.15783L22.1802 1.0813Z" fill={Red}/>
            </svg>
            <h3 className="AboutUs__title">About us</h3>
            <h4 className="AboutUs__subtitle">Projet pédagogique <a className="AboutUs__link" href="https://www.hetic.net/"><span className="AboutUs__bold">HÉTIC P2020</span></a></h4>
            <div className="AboutUs__trait" />
            <p className="AboutUs__names">
                <a className="AboutUs__link" href="https://dribbble.com/claralangen">José <span className="AboutUs__bold">Guignery Teixeira</span></a> | {' '}
                <a className="AboutUs__link" href="https://dribbble.com/claralangen">Clara <span className="AboutUs__bold">de Langenhagen</span></a> <br /> 
                <a className="AboutUs__link" href="https://dribbble.com/claralangen">Adebayo <span className="AboutUs__bold">Hountondji</span></a> | {' '}
                <a className="AboutUs__link" href="https://dribbble.com/claralangen">Maël <span className="AboutUs__bold">Allano</span></a> | {' '}
                <a className="AboutUs__link" href="https://dribbble.com/claralangen">Rainald <span className="AboutUs__bold">Durand</span></a>
            </p>
            <h5 className="AboutUs__linkBlue_title">Dataset source</h5>
            <a className="AboutUs__linkBlue" href="https://www.kaggle.com/zynicide/wine-reviews">
                <img src={kaggle} alt="kaggle" />
            </a>
        </div>
    </AboutUsStyled>
);

export default AboutUs;