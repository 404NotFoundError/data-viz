import React from 'react';
import LogoStyled from './LogoStyled';
import { Red } from '../../helpers/const';

const Logo = () => (
    <LogoStyled href="/">
        <svg width="34" height="39" viewBox="0 0 34 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10.9607" cy="5.83014" r="4.83014" stroke={Red} stroke0pacity="0.504" strokeWidth="2"/>
            <circle cx="5.83014" cy="14.9252" r="4.83014" stroke={Red} stroke0pacity="0.504" strokeWidth="2"/>
            <circle cx="16.7908" cy="14.9252" r="4.83014" stroke={Red} stroke0pacity="0.504" strokeWidth="2"/>
            <circle cx="27.285" cy="14.9252" r="4.83014" stroke={Red} stroke0pacity="0.504" strokeWidth="2"/>
            <circle cx="10.9607" cy="24.0202" r="4.83014" stroke={Red} stroke0pacity="0.504" strokeWidth="2"/>
            <circle cx="21.9213" cy="24.0202" r="4.83014" stroke={Red} stroke0pacity="0.504" strokeWidth="2"/>
            <circle cx="16.6003" cy="33.1699" r="4.83014" stroke={Red} stroke0pacity="0.504" strokeWidth="2"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M22.1802 1.08123C22.1802 1.08123 22.1802 1.08123 22.1802 1.08123C19.8829 0.741668 17.7452 2.32877 17.4057 4.62611C17.0661 6.92346 18.6532 9.0611 20.9505 9.40066C23.2479 9.74022 25.3855 8.15312 25.7251 5.85578C25.7292 5.82799 25.733 5.80022 25.7366 5.77248L21.5777 5.15777L22.1802 1.08123Z" fill={Red}/>
        </svg>
    </LogoStyled>
)

export default Logo;