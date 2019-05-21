import React, { Component } from 'react';
import { CountryModalStyled, Title, Subtitle } from './CountryModalStyled';

class CountryModal extends Component {
    render() {
        const { toggleCountryModal, isCountryOpen } = this.props;

        return (
            <CountryModalStyled isCountryOpen={isCountryOpen} className="CountryModal">
                <div className="CountryModal">
                    <svg className="CountryModal__closeBtn" onClick={() => toggleCountryModal(false)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#30153E"/>
                    </svg>
                    <Title>Classement du pays</Title>
                    <Subtitle>Moyenne des notes des vins</Subtitle>
                    <Title>Meilleurs vins</Title>
                    <Title>Répartition des cépages</Title>
                </div>
            </CountryModalStyled>
        );
    }
};

export default CountryModal;