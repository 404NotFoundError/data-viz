import React, { Component } from 'react';
import SearchModalStyled from './SearchModalStyled';
import { Fog } from '../../helpers/const';

class SearchModal extends Component {
    render() {
        const { toggleSearch, isSearchOpen } = this.props;

        return (
            <SearchModalStyled isSearchOpen={isSearchOpen} className="searchModal">
                <div className="searchModal">
                    <svg className="searchModal__closeBtn" onClick={() => toggleSearch(false)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#30153E"/>
                    </svg>
                    <h3 className="searchModal__title">Index des vins</h3>
                    <h4 className="searchModal__subtitle">Votre recherche réinitialisera les filtres de la carte</h4>
                    <div className="searchModal__inputContainer">
                        <svg className="logoSearch" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M15.0372 13.5372C15.8046 12.469 16.255 11.1616 16.255 9.75488C16.255 6.16488 13.345 3.25488 9.755 3.25488C6.165 3.25488 3.255 6.16488 3.255 9.75488C3.255 13.3449 6.165 16.2549 9.755 16.2549C11.1617 16.2549 12.4691 15.8045 13.5373 15.0371L19.255 20.7449L20.745 19.2549L15.0372 13.5372ZM5.255 9.75488C5.255 12.2449 7.26501 14.2549 9.755 14.2549C12.245 14.2549 14.255 12.2449 14.255 9.75488C14.255 7.26488 12.245 5.25488 9.755 5.25488C7.26501 5.25488 5.255 7.26488 5.255 9.75488Z" fill={Fog}/>
                        </svg>
                        <input className="inputSearch" type="text" placeholder="Search a wine" />
                    </div>
                    <div className="searchModal__resultsContainer">
                    </div>
                    <button className="searchModal__moreDetailsBtn">More details</button>
                </div>
            </SearchModalStyled>
        );
    }
};

export default SearchModal;