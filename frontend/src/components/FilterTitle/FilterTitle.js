import React from 'react';
import FilterTitleStyled from './FilterTitleStyled';
import ActiveFilters from "../ActiveFilters/ActiveFilters";

const FilterTitle = ({titleDisplayed, activeFilters, removeFilter, wines = 0, currCountry}) => (
    <FilterTitleStyled>
        <div className="trait" />
        <div className="rightContainer">
            <h3 className="title" dangerouslySetInnerHTML={{__html: currCountry ? currCountry : titleDisplayed}}/>
            <p className="winesNumber">{wines.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} wines</p>
        </div>
        <ActiveFilters activeFilters={activeFilters} removeFilter={removeFilter}/>
    </FilterTitleStyled>
);

export default FilterTitle;