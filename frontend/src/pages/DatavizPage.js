import React, { Component, Fragment } from 'react';
import Logo from '../components/Logo/Logo';
import Filter from '../components/Filter/Filter';
import FilterTitle from "../components/FilterTitle/FilterTitle";
import SearchModal from "../components/SearchModal/SearchModal";
import CountryModal from "../components/CountryModal/CountryModal";
import Tuto from "../components/Tuto/Tuto";
import MapTest from "../components/MapTest";
import { Redirect } from 'react-router-dom';
// import wines from "../helpers/mockups/data.js"

const countriesURL = "https://wine.frb.io/api/countries";
const winesURL = "https://wine.frb.io/api/wines";
const winesJSON = "../../helpers/mockups/data.json";

class Tooltip extends Component {
    state = {
        redirect: false
    }

    renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to={`single/${this.props.id}`} />
        }
    }

    toggleRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    render() {
        const { isOpen, name = "", grade = 0, price = 0, closeTooltip } = this.props;

        return (
            <Fragment>
                {this.renderRedirect()}
                <div style={{
                    position: "absolute",
                    zIndex: 1000,
                    bottom: 20,
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "rgba(255, 255, 255, 0.4)",
                    display: isOpen ? "block" : "none",
                    borderRadius: 3,
                    padding: 9,
                    boxSizing: "border-box",
                    color: "rgba(0, 0, 0, 0.8)"
                }}>
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: 6
                    }}>
                        <p style={{marginRight: 10}}>{name}</p>
                        <p onClick={() => closeTooltip()} style={{display: "flex"}}>
                            <svg id="Capa_1" x="0px" y="0px" viewBox="0 0 47.971 47.971" width="8px" height="8px">
                                <g fill="rgba(0, 0, 0, 0.8)">
                                    <path d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88   c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242   C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879   s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z"/>
                                </g>
                            </svg>
                        </p>
                    </div>
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between"
                    }}>
                        <div>
                            <span style={{marginRight: 10}}>{grade}/100</span>
                            <span>{parseInt(price)}$</span>
                        </div>
                        <p style={{marginLeft: 10}} onClick={this.toggleRedirect}>see more</p>
                    </div>
                </div>
            </Fragment>
        )
    }
};

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

class DatavizPage extends Component {
    state = {
        countries: [],
        wines: [],
        isSearchOpen: false,
        isCountryOpen: false,
        currentFilter: '',
        currentColors: localStorage.getItem('currentColors') ? JSON.parse(localStorage.getItem('currentColors')) : { red: true, pink: true, white: true },
        titleDisplayed: 'World',
        activeFilters: localStorage.getItem('activeFilters') ? JSON.parse(localStorage.getItem('activeFilters')) : { grade: false, vintage: false, price: false, taste: false, colors: true },
        grade: [80, 99],
        vintage: [1992, 2016],
        price: [4, 2500],
        taste: localStorage.getItem('taste') ? JSON.parse(localStorage.getItem('taste')) : [],
        step: localStorage.getItem('tuto') ? localStorage.getItem('tuto') : 0,
        currCountry: "",
        isTooltipOpen: false,
        tooltipName: "",
        tooltipGrade: 0,
        tooltipPrice: 0,
        tooltipId: 0
    }

    componentDidMount() {
        this.init();
    }

    init = async () => {
        const winesRes = await fetch(winesURL);
        const { wines } = await winesRes.json();

        const countriesRes = await fetch(countriesURL);
        const { countries } = await countriesRes.json();

        const maxYear = localStorage.getItem("year") ? JSON.parse(localStorage.getItem("year"))[1] : Math.max.apply(Math, wines.map(wine => wine.date));
        const minYear = localStorage.getItem("year") ? JSON.parse(localStorage.getItem("year"))[0] : Math.min.apply(Math, wines.map(wine => wine.date));

        const maxGrade = localStorage.getItem("grade") ? JSON.parse(localStorage.getItem("grade"))[1] : Math.max.apply(Math, wines.map(wine => wine.grade));
        const minGrade = localStorage.getItem("grade") ? JSON.parse(localStorage.getItem("grade"))[0] : Math.min.apply(Math, wines.map(wine => wine.grade));

        const maxPrice = localStorage.getItem("price") ? JSON.parse(localStorage.getItem("price"))[1] : Math.max.apply(Math, wines.map(wine => wine.price));
        const minPrice = localStorage.getItem("price") ? JSON.parse(localStorage.getItem("price"))[0] : Math.min.apply(Math, wines.map(wine => wine.price));

        this.setState({
            wines,
            countries,
            vintage: [minYear, maxYear],
            grade: [minGrade, maxGrade],
            price: [minPrice, maxPrice]
        })
    }

    toggleToolTip = (bool, name = "", grade = 0, price = 0, id = 0) => {
        this.setState({
            isTooltipOpen: bool,
            tooltipName: name,
            tooltipGrade: grade,
            tooltipPrice: price,
            tooltipId: id
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

        localStorage.setItem("currentColors", JSON.stringify(currentColors));

        const activeFilters = this.state.activeFilters;
        activeFilters.colors = (!currentColors.red && !currentColors.pink && !currentColors.white) ? false : true;

        localStorage.setItem("activeFilters", JSON.stringify(activeFilters));

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

        localStorage.setItem('activeFilters', JSON.stringify(activeFilters));

        if (filter === "colors") {
            localStorage.setItem("currentColors", JSON.stringify({ red: false, pink: false, white: false }));
            this.setState({
                activeFilters,
                currentColors: { red: false, pink: false, white: false },
                currentFilter: ''
            })
        } else if (filter === "vintage") {
            localStorage.setItem('year', JSON.stringify([1992, 2017]));
            this.setState({
                activeFilters,
                [filter]: [1992, 2017],
                currentFilter: ''
            })
        } else if (filter === "grade") {
            localStorage.setItem('grade', JSON.stringify([80, 99]));
            this.setState({
                activeFilters,
                [filter]: [80, 99],
                currentFilter: ''
            })
        } else if (filter === "price") {
            localStorage.setItem('price', JSON.stringify([4, 2500]));
            this.setState({
                activeFilters,
                [filter]: [4, 2500],
                currentFilter: ''
            })
        } else {
            localStorage.setItem('taste', JSON.stringify([]));
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
            activeFilters.vintage = (data[0] === 1992 && data[1] === 2017) ? false : true;
            localStorage.setItem("year", JSON.stringify(data));
        }
        if (filter === 'grade') {
            activeFilters.grade = (data[0] === 80 && data[1] === 99) ? false : true;
            localStorage.setItem("grade", JSON.stringify(data));
        }
        if (filter === 'price') {
            activeFilters.price = (data[0] === 4 && data[1] === 2500) ? false : true;
            localStorage.setItem("price", JSON.stringify(data));
        }

        localStorage.setItem("activeFilters", JSON.stringify(activeFilters));

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

        localStorage.setItem('taste', JSON.stringify(tastes));
        localStorage.setItem('activeFilters', JSON.stringify(activeFilters));

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
            currCountry,
            isTooltipOpen,
            tooltipName,
            tooltipGrade,
            tooltipPrice,
            tooltipId
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
                    {/* {currCountry && (
                        <CountryIcon 
                            toggleCountryModal={this.toggleCountryModal}
                            currCountry={currCountry}
                        />
                    )} */}
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
                        toggleCountryModal={this.toggleCountryModal}
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
                        toggleToolTip={this.toggleToolTip}
                    />
                    {/* <Tooltip
                        isOpen={isTooltipOpen}
                        name={tooltipName}
                        grade={tooltipGrade}
                        price={tooltipPrice}
                        id={tooltipId}
                        closeTooltip={() => this.toggleToolTip(false)}
                    /> */}
                </div>
            </Fragment>
        );
    }
}

export default DatavizPage;