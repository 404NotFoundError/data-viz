import React from 'react';
import FilterTitleStyled from './FilterTitleStyled';
import ActiveFilters from "../ActiveFilters/ActiveFilters";

const countryIconStyle = {
    outline: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    marginLeft: 20,
    transform: "translateY(-4px)"
};

const CountryIcon = ({ toggleCountryModal, currCountry }) => (
    <div onClick={() => toggleCountryModal(true)} style={countryIconStyle}>
        <img key={currCountry} style={{ width: 18, height: 18 }} src={require(`../../static/images/countries/${currCountry.toLowerCase()}.png`)} alt="Country flag" className="countryFlag" />
    </div>
);

const FilterTitle = ({titleDisplayed, activeFilters, removeFilter, wines = 0, currCountry, toggleCountryModal}) => (
    <FilterTitleStyled>
        <div className="trait" />
        <div className="rightContainer">
            <h3 className="title" dangerouslySetInnerHTML={{__html: currCountry ? currCountry : titleDisplayed}}/>
            <p className="winesNumber">{wines.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} wines</p>
        </div>
        {currCountry && (
            <CountryIcon 
                toggleCountryModal={toggleCountryModal}
                currCountry={currCountry}
            />
        )}
        <ActiveFilters activeFilters={activeFilters} removeFilter={removeFilter}/>
    </FilterTitleStyled>
);

export default FilterTitle;