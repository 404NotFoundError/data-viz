import React from 'react';
import ColorsFilterItemStyled from './ColorsFilterItemStyled';

const ColorsFilterItem = ({color, isActive, changeCurrentColors}) => (
    <ColorsFilterItemStyled color={color} isActive={isActive} onClick={changeCurrentColors}>
        <div className="coloredDiv"/>
    </ColorsFilterItemStyled>
)

export default ColorsFilterItem;