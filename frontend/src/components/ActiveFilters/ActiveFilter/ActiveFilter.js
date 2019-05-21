import React from 'react';
import ActiveFilterStyled from './ActiveFilterStyled';

const ActiveFilter = ({isActive, filter, removeFilter}) => (
    <ActiveFilterStyled isActive={isActive} onClick={() => removeFilter(filter)}>
        <p className="filter">{ filter }</p>
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.2917 3.47209L9.52796 2.70834L6.50004 5.73626L3.47212 2.70834L2.70837 3.47209L5.73629 6.50001L2.70837 9.52793L3.47212 10.2917L6.50004 7.26376L9.52796 10.2917L10.2917 9.52793L7.26379 6.50001L10.2917 3.47209Z" fill="white"/>
        </svg>
    </ActiveFilterStyled>
);

export default ActiveFilter;