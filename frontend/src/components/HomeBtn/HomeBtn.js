import React from 'react';
import HomeBtnStyled from './HomeBtnStyled';

const HomeBtn = ({name, url}) => (
    <HomeBtnStyled href={url}>
        {name}
    </HomeBtnStyled>
);

export default HomeBtn;