import React, { Fragment } from 'react';
import ZoomBtnStyled from './ZoomBtnStyled';

const ZoomBtn = ({ zoom }) => (
    <ZoomBtnStyled
    zoom={zoom}
                // }} onClick={() => this.zoom('+')}>
    >
        {zoom ? 
            <Fragment>
                <div className="traitHor"/>
                <div className="traitVer"/>
            </Fragment>
            :
            <div className="traitHor"/>
        }
    </ZoomBtnStyled>
);

export default ZoomBtn;