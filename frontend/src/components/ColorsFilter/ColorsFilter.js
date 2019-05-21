import React from 'react';
import ColorsFilterStyled from './ColorsFilterStyled';
import ColorsFilterItem from './ColorsFilterItem/ColorsFilterItem';
import { Red, Rose, White } from '../../helpers/const';

const ColorsFilter = ({currentColors, changeCurrentColors}) => (
    <ColorsFilterStyled>
        <ColorsFilterItem color={Red} isActive={currentColors.red} changeCurrentColors={() => changeCurrentColors('red')}/> {/* red */}
        <ColorsFilterItem color={Rose} isActive={currentColors.pink} changeCurrentColors={() => changeCurrentColors('pink')}/> {/* pink */}
        <ColorsFilterItem color={White} isActive={currentColors.white} changeCurrentColors={() => changeCurrentColors('white')}/> {/* white */}
    </ColorsFilterStyled>
)

export default ColorsFilter;