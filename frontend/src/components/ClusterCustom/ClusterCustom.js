import React from 'react';
import { ClusterCustomStyled, NumberOfWines } from './ClusterCustomStyled';

const ClusterCustom = ({name, changeCurrCountry = null, changeCenter = null}) => (
    <ClusterCustomStyled onClick={() => {
        if (changeCurrCountry) {
            changeCurrCountry(name);
        }
        if (changeCenter) {
            changeCenter();
        }
    }}>
        <NumberOfWines>{name}</NumberOfWines>
    </ClusterCustomStyled>
);

export default ClusterCustom;