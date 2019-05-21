import React from 'react';
import LayoutStyled from './LayoutStyled';

const Layout = ({ children }) => (
    <LayoutStyled>
        {children}
    </LayoutStyled>
);

export default Layout;