import React, { Component } from 'react';
import { CountryModalStyled, Title, Subtitle } from './CountryModalStyled';

class CountryModal extends Component {

    state = {
        averageResult: [],
        wineResult: {},
        wineLoaded: false,
        variety: {},
        varietyLoaded: false,
    }
    componentWillMount() {
        this.handleAverage();
        this.handleBestWine();
        this.handleVariety();
    }


    handleVariety = async () => {
        const varietyUrl = await fetch('https://wine.frb.io/api/varieties');
        const varietyResult = await varietyUrl.json();
        this.setState({
            variety: varietyResult.results,
            varietyLoaded: true
        });
    }

    handleAverage = async () => {
        const averageRes = await fetch("https://wine.frb.io/api/average");
        const average = await averageRes.json();

        this.setState({
            averageResult: average.results
        });
    }

    handleBestWine = async () => {
        const bestWine = await fetch("https://wine.frb.io/api/best/wines");
        const wineResult = await bestWine.json();

        this.setState({
            wineResult: wineResult.results,
            wineLoaded: true
        });
    }

    filteredAverageCountry = () => {
        const sortedAverage = this.state.averageResult.sort((a, b) => {
            return a.average.localeCompare(b.average);
        });

        let result = [];
        for (let i = 0; i < sortedAverage.length; i++) {
            if (sortedAverage[i].country === this.props.currCountry) {
                result.push(
                    sortedAverage[i - 1] === undefined ? sortedAverage[i + 2] : sortedAverage[i - 1],
                    sortedAverage[i],
                    sortedAverage[i + 1] === undefined ? sortedAverage[i - 2] : sortedAverage[i + 1]
                );
            }
        }

        console.log(result)

        return result;
    }

    render() {
        console.log(this.state.averageResult)
        const { toggleCountryModal, isCountryOpen, currCountry } = this.props;

        const filtredCountry = this.filteredAverageCountry().map((el, i) => {
            return <li key={i}>
                <img key={i} style={{ width: 18, height: 18 }} src={require(`../../static/images/countries/${el.country.toLowerCase()}.png`)} alt="Country flag" className="countryFlag" />
                <p className={el.country === currCountry ? "current" : "side"} style={{ margin: "0 10px" }} >{el.country} </p>
                <p className={el.country === currCountry ? "current" : "side"}> rate : {Math.round(el.average * 100) / 100} / 100</p>
            </li >;
        });

        let color;

        const bestWine = this.state.wineLoaded && this.state.wineResult[currCountry] !== undefined ?
            this.state.wineResult[currCountry].map((el, i) => {

                el.color === "red" ? color = "#D71140" : el.color === "white" ? color = "#b3b3b3" : color = "#EE98AC";

                return <li key={i} className="wineList">
                    <div className="coloredDiv" style={{
                        width: "16px", height: "16px", backgroundColor: color, borderRadius: "50%"
                    }} />
                    <p className="bestWines">{el.name}</p>
                </li>;
            })
            : null;
        const variety = this.state.variety[currCountry] === undefined ?
            null :
            this.state.variety[currCountry].map((el, i) => {
                return <li key={i}><p>{el.variety} : {el.count} wines in this variety</p></li>
            });


        return (
            <CountryModalStyled isCountryOpen={isCountryOpen} className="CountryModal">
                <div className="CountryModal">
                    <svg className="CountryModal__closeBtn" onClick={() => toggleCountryModal(false)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#30153E" />
                    </svg>
                    <div className="ContryAverage container">
                        <Title>Country ranking</Title>
                        <Subtitle>Average wine rating</Subtitle>
                        <ul>{filtredCountry}</ul>
                    </div>
                    <div className="bestWineContainer container">
                        <Title>Best wines</Title>
                        <ul>{bestWine}</ul>
                    </div>
                    <div className="varietyContainer container">
                        <Title>Distribution of grape variety</Title>
                        {variety}
                    </div>
                </div>
            </CountryModalStyled>
        );
    }
};

export default CountryModal;