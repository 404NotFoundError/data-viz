import React from 'react';
import FilterStyled from './FilterStyled';
import FilterItem from './FilterItem/FilterItem';
import ColorsFilter from '../ColorsFilter/ColorsFilter';
import GradeFilter from './GradeFilter/GradeFilter';
import VintageFilter from './VintageFilter/VintageFilter';
import PriceFilter from './PriceFilter/PriceFilter';
import TasteFilter from './TasteFilter/TasteFilter';

const filterNames = ['grade', 'vintage', 'price', 'taste'];

const Filter = (
    {
        currentFilter,
        changeCurrentFilter,
        currentColors,
        changeCurrentColors,
        updateTasteData,
        taste,
        updateFilterData,
        vintage
    }) => (
    <FilterStyled>
        <div className="filtersContainer">
            <ul className="filtersList">
                {
                    filterNames.map((filter, i) => (
                        <FilterItem key={`filter__${i}`} title={filter} isActive={currentFilter === filter} changeCurrentFilter={() => changeCurrentFilter(filter)} />
                    ))
                }
            </ul>
            <ColorsFilter
                currentColors={currentColors}
                changeCurrentColors={changeCurrentColors}
                />
        </div>
        {
            currentFilter && (
                <div className="filterComponent__container">
                    {currentFilter === "grade" && (<GradeFilter />)}
                    {currentFilter === "vintage" && (<VintageFilter updateFilterData={updateFilterData} vintage={vintage} />)}
                    {currentFilter === "price" && (<PriceFilter />)}
                    {currentFilter === "taste" && (<TasteFilter updateTasteData={updateTasteData} stateTaste={taste} />)}
                </div>
            )
        }
    </FilterStyled>
);

export default Filter;