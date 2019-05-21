import React from 'react';
import ActiveFiltersStyled from './ActiveFiltersStyled';
import ActiveFilter from './ActiveFilter/ActiveFilter';

const ActiveFilters = ({activeFilters, removeFilter}) => (
    <ActiveFiltersStyled>
        {Object.keys(activeFilters).map((filter, i) => (
            <ActiveFilter key={`filter__${i}`} isActive={activeFilters[filter]} filter={filter} removeFilter={removeFilter}/>
        ))}
    </ActiveFiltersStyled>
);

export default ActiveFilters;