import React from 'react';
import PriceFilterStyled from './PriceFilterStyled';
import Range from 'rc-slider/lib/Range';
import 'rc-slider/assets/index.css';

const style = { width: 8, height: 400, margin: '10px 0px', transform: 'translateX(-1px)' };

const PriceFilter = ({updateFilterData, price, max = 2500, min = 4}) => (
    <PriceFilterStyled>
        <p className="marks">{price[1]}</p>
        <Range
            style={style}
            vertical={true}
            min={min}
            max={max}
            step={1}
            onChange={value => updateFilterData('price', value)}
            defaultValue={price}
        />
        <p className="marks">{price[0]}</p>
    </PriceFilterStyled>
);

export default PriceFilter;