import React, { Component } from 'react';
import SearchModalStyled from './SearchModalStyled';
import { Fog } from '../../helpers/const';
import { Link } from 'react-router-dom';


class SearchModal extends Component {
    state = {
        wines: [],
        inputValue: "",
        resultWine: [],
        alphabet: [":", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
        link: "",
        maxWineDisplayed: 500,
        letterSelected: false,
        targetedWine: null
    }

    onInputChange = e => {
        this.setState({
            inputValue: e.target.value
        });
    }

    onSearchClick = () => {
        this.userInputValidation();
    }

    userInputValidation = () => {

        const userValue = this.state.inputValue;
        if (userValue.length >= 5 && /^[a-zA-Z\s]+$/.test(this.state.inputValue)) {
            this.returnSearchResult();
        }
        else {
            const resultWine = [{ id: null }, { name: "Your research is not valid" }];
            this.setState({
                resultWine
            });
        }
    }

    returnSearchResult = () => {
        let resultWine = this.props.wines.filter(el => {
            if (el.name.toUpperCase().indexOf(this.state.inputValue.toUpperCase()) >= 0) {
                return el;
            }
        });
        if (resultWine.length === 0) {
            resultWine = [{ id: null }, { name: "Your research has not result " }];
        }
        this.setState({
            resultWine
        });
    }

    onSingleWineClick = e => {
        e.target.classList.add('selected');
        if (this.state.targetedWine !== null) {
            this.state.targetedWine.classList.remove('selected');
        }

        let link = e.target.value;
        if (link !== 0) {
            this.setState({
                link,
                targetedWine: e.target
            });
        }
    }

    onSingleWineMouseEnter = e => {
        e.target.classList.add("hovered");
    }

    onSingleWineMouseLeave = e => {
        e.target.classList.remove("hovered");
    }

    displayMoreWines = () => {
        this.setState({
            maxWineDisplayed: this.state.maxWineDisplayed + 500
        });
    }

    onAlphabetClick = e => {
        let letterSelected = true
        let resultWine = this.props.wines.filter(el => {
            if (el.name.toUpperCase().indexOf(e.currentTarget.textContent.toUpperCase()) === 0) {
                return el;
            }
        });
        this.setState({
            resultWine,
            letterSelected
        }, () => {
            console.log(this.state.letterSelected)
        });
    }

    onKeyPress = (e) => {
        if (e.key == "Enter") {
            this.setState({
                inputValue: e.target.value
            }, () => {
                this.userInputValidation();
            });
        }
    }

    render() {
        const { toggleSearch, isSearchOpen, wines } = this.props;
        //display the alphabet 
        const alphabetList = this.state.alphabet.map(letter => {
            return (
                <li key={letter}
                    onClick={e => this.onAlphabetClick(e)}>
                    {letter}
                </li>);
        });
        //return in an alphabetic order the list of wine from the database
        const alphabeticWines = this.props.wines.sort((a, b) => {
            return a.name.localeCompare(b.name);
        });
        //display a range of wine
        const initWineList = alphabeticWines.slice(0, this.state.maxWineDisplayed).map(wine => {
            return (
                <li key={`${wine.id}${wine.name}`}
                    onClick={e => this.onSingleWineClick(e)}
                    value={wine.id}
                    className="searchModal__wineContent"
                    onMouseEnter={e => this.onSingleWineMouseEnter(e)}
                    onMouseLeave={e => this.onSingleWineMouseLeave(e)}>
                    {wine.name}
                </li>
            )
        });
        const wineList = this.state.resultWine.slice(0, this.state.maxWineDisplayed).map(wine => {
            return (
                <li key={`${wine.id}${wine.name}`}
                    onClick={e => this.onSingleWineClick(e)}
                    value={wine.id}
                    className="searchModal__wineContent"
                    onMouseEnter={e => this.onSingleWineMouseEnter(e)}
                    onMouseLeave={e => this.onSingleWineMouseLeave(e)}>
                    {wine.name}
                </li>
            )
        });

        return (
            <SearchModalStyled isSearchOpen={isSearchOpen} className="searchModal">
                <div className="searchModal">
                    <svg className="searchModal__closeBtn" onClick={() => toggleSearch(false)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#30153E" />
                    </svg>
                    <h3 className="searchModal__title">Wine index</h3>
                    <h4 className="searchModal__subtitle">Your search will reset the filters on the map</h4>
                    <div className="searchModal__inputContainer">
                        <svg className="logoSearch" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={this.onSearchClick}>
                            <path fillRule="evenodd" clipRule="evenodd" d="M15.0372 13.5372C15.8046 12.469 16.255 11.1616 16.255 9.75488C16.255 6.16488 13.345 3.25488 9.755 3.25488C6.165 3.25488 3.255 6.16488 3.255 9.75488C3.255 13.3449 6.165 16.2549 9.755 16.2549C11.1617 16.2549 12.4691 15.8045 13.5373 15.0371L19.255 20.7449L20.745 19.2549L15.0372 13.5372ZM5.255 9.75488C5.255 12.2449 7.26501 14.2549 9.755 14.2549C12.245 14.2549 14.255 12.2449 14.255 9.75488C14.255 7.26488 12.245 5.25488 9.755 5.25488C7.26501 5.25488 5.255 7.26488 5.255 9.75488Z" fill={Fog} />
                        </svg>
                        <input className="inputSearch" type="text" placeholder="Search a wine" value={this.state.inputValue} onChange={e => this.onInputChange(e)} onKeyPress={this.onKeyPress} />
                    </div>
                    <div className="searchModal__resultsContainer">
                        <ul className="searchModal__alphabet">
                            {alphabetList}
                        </ul>
                        <ul className="searchModal__resultContent">
                            {this.state.inputValue.length !== 0 || this.state.letterSelected ? wineList : initWineList}
                        </ul>
                        <p onClick={this.displayMoreWines}>Display more wine</p>
                    </div>
                    <button className="searchModal__moreDetailsBtn">{this.state.link !== "" ? <Link to={`/single/${this.state.link}`}>More details</Link> : "More details"}</button>
                </div>
                <div className="searchModal__resultsContainer">
                    <ul className="searchModal__alphabet">
                        {alphabetList}
                    </ul>
                    <ul className="searchModal__resultContent">
                        {this.state.inputValue.length !== 0 || this.state.letterSelected ? wineList : initWineList}
                    </ul>
                    <p onClick={this.displayMoreWines}>Display more wine</p>
                </div>
                {this.state.link !== "" && (<button className="searchModal__moreDetailsBtn"><Link to={`/single/${this.state.link}`}>More details</Link></button>)}
            </SearchModalStyled>
        );
    }
};

export default SearchModal;