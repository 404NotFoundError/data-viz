import React from 'react';
import * as d3 from "d3";
import { ClusterCustomStyled, NumberOfWines } from './ClusterCustomStyled';

const ClusterCustom = ({name, changeCurrCountry = null, changeCenter = null, wineNumber = 0, data = [0, 0, 0]}) => {
    const width = wineNumber / 10 > 60 ? wineNumber / 10 : 60;
    let pie = d3.pie()(data);
    const isColored = !data[0] && !data[1] && !data[2] ? false : true;

    return (
        <ClusterCustomStyled isColored={isColored} onClick={() => {
            if (changeCurrCountry) {
                changeCurrCountry(name);
            }
            if (changeCenter) {
                changeCenter();
            }
        }}>
            <NumberOfWines>{wineNumber ? wineNumber : name}</NumberOfWines>
            <svg className="pieChart" height={width} width={width}>
                <g transform={`translate(${width / 2},${width / 2})`}>
                    <Slice pie={pie} width={width}/>
                </g>
            </svg>
        </ClusterCustomStyled>
    );
};

export default ClusterCustom;


const Slice = ({pie, width}) => {
  let arc = d3
    .arc()
    .innerRadius(width/2 - 6)
    .outerRadius(width/2);

  let colors = ["#D71140", "#FFE8B5", "#EE98AC"];

  return pie.map((slice, index) => {
    let sliceColor = colors[index];

    return <path key={`slice__${index}`} d={arc(slice)} fill={sliceColor} />;
  });
};