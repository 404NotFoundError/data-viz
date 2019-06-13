import React from 'react';
import VintageFilterStyled from './VintageFilterStyled';
import Range from 'rc-slider/lib/Range';
import 'rc-slider/assets/index.css';

const style = { width: 8, height: 400, margin: '10px 0px', transform: 'translateX(-1px)' };

const VintageFilter = ({updateFilterData, vintage, max = 1992, min = 2017}) => (
    <VintageFilterStyled>
        <p className="marks">{vintage[1]}</p>
        <Range
            style={style}
            vertical={true}
            min={min}
            max={max}
            step={1}
            onChange={value => updateFilterData('vintage', value)}
            defaultValue={vintage}
        />
        <p className="marks">{vintage[0]}</p>
    </VintageFilterStyled>
);

export default VintageFilter;