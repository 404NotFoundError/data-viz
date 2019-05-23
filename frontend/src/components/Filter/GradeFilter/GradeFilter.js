import React from 'react';
import GradeFilterStyled from './GradeFilterStyled';
import Range from 'rc-slider/lib/Range';
import 'rc-slider/assets/index.css';

const style = { width: 8, height: 400, margin: '10px 0px', transform: 'translateX(-1px)' };

const GradeFilter = ({updateFilterData, grade, max = 99, min = 80}) => (
    <GradeFilterStyled>
        <p className="marks">{grade[1]}</p>
        <Range
            style={style}
            vertical={true}
            min={min}
            max={max}
            step={1}
            onChange={value => updateFilterData('grade', value)}
            defaultValue={grade}
        />
        <p className="marks">{grade[0]}</p>
    </GradeFilterStyled>
);

export default GradeFilter;