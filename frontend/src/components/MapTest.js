import React, { Fragment } from 'react';
import ReactMapboxGl, { Layer, Feature, Marker } from 'react-mapbox-gl';
import ClusterCustom from './ClusterCustom/ClusterCustom';
import { Redirect } from 'react-router-dom';

import Loader from "../static/images/loader.gif";

const bounds = [
  [-180, -65], // Southwest coordinates
  [180, 85]  // Northeast coordinates
];

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiZ2FtYTk3ODAiLCJhIjoiY2p2NmR3NzA4MDA1NzQzbzdpd3IzNml3NiJ9.uqGMqqnpdiBlrnzWaxMKMg",
  renderWorldCopies: false
});

class MapTest extends React.PureComponent {
  state = {
    zoom: [1],
    step: "continents",
    center: [0.8130060000328854, 46.55886205821483],
    redirect: null
  };

  setRedirect = id => {
    this.setState({
      redirect: id
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to={`single/${this.state.redirect}`} />
    }
  }

  setStep = e => {
    let step;
    if (e.getZoom() < 3.9) {
      step = "continents";
      this.props.changeCurrCountry("");
    }
    else {
      step = "countries";
    }

    this.setState({
      step
    })
  }

  changeCenter = (lng, lat, zoom = 4) => {
    this.setState({
      zoom: [zoom],
      center: [lng, lat]
    })
  }

  mouseOverWine = e => {
    e.feature.layer.paint["circle-radius"] = 10;
    document.body.style.cursor = "pointer";
  }

  toRender = () => {
    const { step } = this.state;
    const {
      countries,
      currCountry,
      changeCurrCountry,
      currentColors,
      vintage,
      grade,
      price,
      taste
    } = this.props;
    const winesTemp = this.props.wines;

    const wines = winesTemp
      .filter(wine => (wine.date <= vintage[1]) && wine.date >= vintage[0])
      .filter(wine => (wine.grade <= grade[1]) && wine.grade >= grade[0])
      .filter(wine => (wine.price <= price[1]) && wine.price >= price[0])
      .filter(wine => {
        if (taste.length) {
          return (taste.find(t => (t === wine.first_taste || t === wine.second_taste || t === wine.third_taste)))
        }
        return true;
      });

    if (step === "continents") {
      return (
        <Fragment>
          {continents.map((continent, i) => {

            const currContinentWines = wines.filter((wine, i) => (wine.continent === continent.name));
            const redWines = currContinentWines.filter(wine => wine.color === "red");
            const whiteWines = currContinentWines.filter(wine => wine.color === "white");
            const pinkWines = currContinentWines.filter(wine => wine.color === "pink");

            const wineNumber = currContinentWines.length;

            if (!wineNumber) return null;

            const colorData = [
              currentColors.red ? redWines.length : 0,
              currentColors.white ? whiteWines.length : 0,
              currentColors.pink ? pinkWines.length : 0,
            ];

            if (!colorData[0] && !colorData[1] && !colorData[2]) {
              return null;
            }

            return (
              <Marker
                key={i}
                coordinates={[continent.longitude, continent.latitude]}
              >
                <ClusterCustom
                  name={continent.name}
                  changeCenter={() => this.changeCenter(continent.longitude, continent.latitude, 3.9)}
                  wineNumber={colorData.reduce((a, b) => a + b) + currContinentWines.filter(wine => wine.color === "").length}
                  data={colorData}
                />
              </Marker>
            )
          })}
        </Fragment>
      )
    }
    if (step === "countries") {
      return (
        <Fragment>
          {countries.map((countrie, i) => {
            if (countrie.name === currCountry) {
              const currCountryWines = wines.filter((wine, i) => (wine.country === currCountry));
              const redWines = currCountryWines.filter(wine => wine.color === "red");
              const whiteWines = currCountryWines.filter(wine => wine.color === "white");
              const pinkWines = currCountryWines.filter(wine => wine.color === "pink");
              // const elseWines = currCountryWines.filter(wine => wine.color === "");

              return (
                <Fragment key={`fragment__${i}`}>
                  {currentColors.red && (
                    <Layer
                      key={`redLayer__${i}`}
                      type="circle"
                      paint={
                        {
                          "circle-color": "#D71140",
                          "circle-radius": 3
                        }
                      }
                    >
                      {
                        redWines.map((wine, index) => (
                          <Feature
                            key={`redWine__${index}`}
                            coordinates={[wine.longitude, wine.latitude]}
                            onClick={() => this.setRedirect(wine.id)}
                            onMouseEnter={e => this.mouseOverWine(e)}
                          />
                        ))
                      }
                    </Layer>
                  )}
                  {currentColors.white && (
                    <Layer
                      key={`whiteLayer__${i}`}
                      type="circle"
                      paint={
                        {
                          "circle-color": "#FFE8B5",
                          "circle-radius": 3
                        }
                      }
                    >
                      {
                        whiteWines.map((wine, index) => (
                          <Feature
                            key={`whiteWine__${index}`}
                            coordinates={[wine.longitude, wine.latitude]}
                            onClick={() => this.setRedirect(wine.id)}
                          />
                        ))
                      }
                    </Layer>
                  )}
                  {currentColors.pink && (
                    <Layer
                      key={`pinkLayer__${i}`}
                      type="circle"
                      paint={
                        {
                          "circle-color": "#EE98AC",
                          "circle-radius": 3
                        }
                      }
                    >
                      {
                        pinkWines.map((wine, index) => (
                          <Feature
                            key={`pinkWine__${index}`}
                            coordinates={[wine.longitude, wine.latitude]}
                            onClick={() => this.setRedirect(wine.id)}
                          />
                        ))
                      }
                    </Layer>
                  )}
                  </Fragment>
                ); 
              }

            const currCountryWines = wines.filter((wine, i) => (wine.country === countrie.name));
            const redWines = currCountryWines.filter(wine => wine.color === "red");
            const whiteWines = currCountryWines.filter(wine => wine.color === "white");
            const pinkWines = currCountryWines.filter(wine => wine.color === "pink");

            const wineNumber = currCountryWines.length;

            if (!wineNumber) return null;

            const colorData = [
              currentColors.red ? redWines.length : 0,
              currentColors.white ? whiteWines.length : 0,
              currentColors.pink ? pinkWines.length : 0,
            ];

            if (!colorData[0] && !colorData[1] && !colorData[2]) {
                return null;
              }

            return (
              <Marker
                key={i}
                coordinates={[countrie.longitude, countrie.latitude]}
              >
                <ClusterCustom
                  name={countrie.name}
                  changeCurrCountry={changeCurrCountry}
                  changeCenter={() => this.changeCenter(countrie.longitude, countrie.latitude)}
                  wineNumber={colorData.reduce((a, b) => a + b) + currCountryWines.filter(wine => wine.color === "").length}
                  data={colorData}
                />
              </Marker>
            )
          })}
        </Fragment>
      )
    }
  }

  render() {
    const { zoom, center, redirect } = this.state;
    const { wines } = this.props;

    if (!wines.length) return <div style={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <img src={Loader} alt="wine glass" style={{ width: "25%" }} />
    </div>

    return (
      <Fragment>
        {this.renderRedirect()}
        {redirect === null && (
          <Map
            style="mapbox://styles/gama9780/cjv6bfst903be1fnolsx2eih4"
            // style='mapbox://styles/mapbox/dark-v10'
            containerStyle={{ width: '100vw', height: '100vh', position: 'absolute', top: 0, left: 0, zIndex: 1 }}
            onZoom={this.setStep}
            zoom={zoom}
            center={center}
            onClick={(map, e) => console.log(e)}
            maxBounds={bounds}
          >
            {this.toRender()}
          </Map>
        )}
      </Fragment>
    );
  }
}

export default MapTest;

const continents = [
  {
    latitude: -80.4384681725362,
    longitude: 21.306263297311922,
    name: "Antarctica"
  },
  {
    latitude: -31.065922730080157,
    longitude: 152.78101519406331,
    name: "Australia"
  },
  {
    latitude: 56.51520886670177,
    longitude: -92.32043635079269,
    name: "North America"
  },
  {
    latitude: 6.426117205286786,
    longitude: 18.276615276175992,
    name: "Africa"
  },
  {
    latitude: 55.85406929584602,
    longitude: 13.206347134378518,
    name: "Europe"
  },
  {
    latitude: 44.94789322476297,
    longitude: 95.75037267845751,
    name: "Asia"
  },
  {
    latitude: -15.173251268423256,
    longitude: -60.792112817153885,
    name: "South America"
  }
];