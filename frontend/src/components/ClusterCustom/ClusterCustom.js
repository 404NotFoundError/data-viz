import React from 'react';
import * as d3 from "d3";
import { ClusterCustomStyled, NumberOfWines } from './ClusterCustomStyled';

const ClusterCustom = ({name, changeCurrCountry = null, changeCenter = null, wineNumber = 0, data = [Math.random() * 1000, Math.random() * 1000, Math.random() * 1000]}) => {
    const width = wineNumber / 10 > 60 ? wineNumber / 10 : 60;
    let pie = d3.pie()(data);

    return (
        <ClusterCustomStyled onClick={() => {
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

  let colors = ["#D71140", "#EE98AC", "#FFE8B5"];

  return pie.map((slice, index) => {
    let sliceColor = colors[index];

    return <path key={`slice__${index}`} d={arc(slice)} fill={sliceColor} />;
  });
};