import React, { Component, Fragment } from 'react';
import Logo from '../components/Logo/Logo';
import Filter from '../components/Filter/Filter';
import FilterTitle from "../components/FilterTitle/FilterTitle";
import SearchModal from "../components/SearchModal/SearchModal";
import CountryModal from "../components/CountryModal/CountryModal";
import Tuto from "../components/Tuto/Tuto";
import MapTest from "../components/MapTest";
// import wines from "../helpers/mockups/data.js"

const countriesURL = "https://wine.frb.io/api/countries";
const winesURL = "https://wine.frb.io/api/wines";
const winesJSON = "../../helpers/mockups/data.json";

const searchIconStyle = {
    position: 'absolute',
    zIndex: 10,
    top: 40,
    right: 40,
    outline: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    marginLeft: 20
};

const SearchIcon = ({ toggleSearch }) => (
    <svg onClick={() => toggleSearch(true)} style={searchIconStyle} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M15.0372 13.5373C15.8046 12.4691 16.255 11.1617 16.255 9.755C16.255 6.165 13.345 3.255 9.755 3.255C6.165 3.255 3.255 6.165 3.255 9.755C3.255 13.345 6.165 16.255 9.755 16.255C11.1617 16.255 12.4691 15.8046 13.5373 15.0372L19.255 20.745L20.745 19.255L15.0372 13.5373ZM5.255 9.755C5.255 12.245 7.26501 14.255 9.755 14.255C12.245 14.255 14.255 12.245 14.255 9.755C14.255 7.26501 12.245 5.255 9.755 5.255C7.26501 5.255 5.255 7.26501 5.255 9.755Z" fill="white" />
    </svg>
);

const countryIconStyle = {
    position: 'absolute',
    zIndex: 10,
    top: 91,
    right: 43,
    outline: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    marginLeft: 20,
    width: 18,
    height: 18
};

const CountryIcon = ({ toggleCountryModal, currCountry }) => (
    <div onClick={() => toggleCountryModal(true)} style={countryIconStyle}>
        <img key={currCountry} style={{ width: 18, height: 18 }} src={require(`../static/images/countries/${currCountry.toLowerCase()}.png`)} alt="Country flag" className="countryFlag" />
    </div>
);

class DatavizPage extends Component {
    state = {
        countries: [],
        wines: [],
        isSearchOpen: false,
        isCountryOpen: false,
        currentFilter: '',
        currentColors: { red: true, pink: true, white: true },
        titleDisplayed: 'World',
        activeFilters: { grade: false, vintage: false, price: false, taste: false, colors: true },
        grade: [80, 99],
        vintage: [1930, 2016],
        price: [4, 2500],
        taste: [],
        step: localStorage.getItem('tuto') ? localStorage.getItem('tuto') : 0,
        currCountry: ""
    }

    componentDidMount() {
        this.init();
    }

    init = async () => {
        const winesRes = await fetch(winesURL);
        const { wines } = await winesRes.json();

        const countriesRes = await fetch(countriesURL);
        const { countries } = await countriesRes.json();

        const maxYear = Math.max.apply(Math, wines.map(wine => wine.date));
        const minYear = Math.min.apply(Math, wines.map(wine => wine.date));

        const maxGrade = Math.max.apply(Math, wines.map(wine => wine.grade));
        const minGrade = Math.min.apply(Math, wines.map(wine => wine.grade));

        const maxPrice = Math.max.apply(Math, wines.map(wine => wine.price));
        const minPrice = Math.min.apply(Math, wines.map(wine => wine.price));

        this.setState({
            wines,
            countries,
            vintage: [minYear, maxYear],
            grade: [minGrade, maxGrade],
            price: [minPrice, maxPrice]
        })
    }

    changeCurrentFilter = filterName => {
        if (filterName === this.state.currentFilter) {
            this.setState({
                currentFilter: ''
            });
        } else {
            this.setState({
                currentFilter: filterName
            });
        }
    }

    changeCurrentColors = color => {
        const currentColors = Object.assign({}, this.state.currentColors);
        currentColors[color] = !this.state.currentColors[color];

        const activeFilters = this.state.activeFilters;
        activeFilters.colors = (!currentColors.red && !currentColors.pink && !currentColors.white) ? false : true;

        this.setState({
            currentColors,
            activeFilters
        })
    }

    changeTitleDisplayed = title => {
        this.setState({
            titleDisplayed: title
        })
    }

    removeFilter = filter => {
        const activeFilters = this.state.activeFilters;
        activeFilters[filter] = false;

        if (filter === "colors") {
            this.setState({
                activeFilters,
                currentColors: { red: false, pink: false, white: false },
                currentFilter: ''
            })
        } else if (filter === "vintage") {
            this.setState({
                activeFilters,
                [filter]: [1929, 2017],
                currentFilter: ''
            })
        } else if (filter === "grade") {
            this.setState({
                activeFilters,
                [filter]: [80, 99],
                currentFilter: ''
            })
        } else if (filter === "price") {
            this.setState({
                activeFilters,
                [filter]: [4, 2500],
                currentFilter: ''
            })
        } else {
            this.setState({
                activeFilters,
                [filter]: [],
                currentFilter: ''
            })
        }
    }

    updateFilterData = (filter, data) => {
        const activeFilters = this.state.activeFilters;
        if (filter === 'vintage') {
            activeFilters.vintage = (data[0] === 1929 && data[1] === 2017) ? false : true;
        }
        if (filter === 'grade') {
            activeFilters.grade = (data[0] === 80 && data[1] === 99) ? false : true;
        }
        if (filter === 'price') {
            activeFilters.price = (data[0] === 4 && data[1] === 2500) ? false : true;
        }

        this.setState({
            activeFilters,
            [filter]: data
        })
    }

    updateTasteData = data => {
        let tastes = [...this.state.taste];

        if (tastes.includes(data)) {
            tastes = tastes.filter(taste => taste !== data);
        } else {
            tastes.push(data);
        }

        const activeFilters = this.state.activeFilters;
        activeFilters.taste = tastes.length ? true : false;

        this.setState({
            activeFilters,
            taste: tastes
        })
    }

    toggleSearch = bool => {
        this.setState({
            isSearchOpen: bool
        })
    }
    toggleCountryModal = bool => {
        this.setState({
            isCountryOpen: bool
        })
    }

    nextStep = () => {
        const { step } = this.state;

        if (step >= 3) {
            return;
        }

        localStorage.setItem('tuto', step + 1);

        this.setState({
            step: this.state.step + 1
        })
    }

    changeCurrCountry = country => {
        this.setState({
            currCountry: country
        })
    }


    render() {
        const {
            wines,
            countries,
            isSearchOpen,
            isCountryOpen,
            currentFilter,
            currentColors,
            titleDisplayed,
            activeFilters,
            taste,
            vintage,
            grade,
            price,
            step,
            currCountry
        } = this.state;

        const winesLength = currCountry ? wines.filter(w => w.country === currCountry).length : wines.length;

        return (
            <Fragment>
                <Tuto step={step} nextStep={this.nextStep} />
                <div style={{
                    height: '100vh',
                    width: '100vw',
                    background: "#1A0E35"
                }}>
                    <Logo />
                    <SearchIcon toggleSearch={this.toggleSearch} />
                    <SearchModal
                        isSearchOpen={isSearchOpen}
                        toggleSearch={this.toggleSearch}
                        wines={wines}
                    />
                    {currCountry && (
                        <CountryIcon toggleCountryModal={this.toggleCountryModal} currCountry={currCountry} />
                    )}
                    <CountryModal
                        isCountryOpen={isCountryOpen}
                        toggleCountryModal={this.toggleCountryModal}
                        countries={countries}
                        currCountry={currCountry}
                    />
                    <FilterTitle
                        titleDisplayed={titleDisplayed}
                        activeFilters={activeFilters}
                        removeFilter={this.removeFilter}
                        step={step}
                        wines={winesLength}
                        currCountry={currCountry}
                    />
                    <Filter
                        currentFilter={currentFilter}
                        changeCurrentFilter={this.changeCurrentFilter}
                        currentColors={currentColors}
                        changeCurrentColors={this.changeCurrentColors}
                        updateTasteData={this.updateTasteData}
                        taste={taste}
                        updateFilterData={this.updateFilterData}
                        vintage={vintage}
                        grade={grade}
                        price={price}
                    />
                    <MapTest
                        wines={wines}
                        countries={countries}
                        changeCurrCountry={this.changeCurrCountry}
                        currCountry={currCountry}
                        currentColors={currentColors}
                        vintage={vintage}
                        grade={grade}
                        price={price}
                        taste={taste}
                    />
                </div>
            </Fragment>
        );
    }
}

export default DatavizPage;