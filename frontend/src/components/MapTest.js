import React, { Fragment } from 'react';
import ReactMapboxGl, { Layer, Feature, Marker } from 'react-mapbox-gl';
import ClusterCustom from './ClusterCustom/ClusterCustom';
const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiZ2FtYTk3ODAiLCJhIjoiY2p2NmR3NzA4MDA1NzQzbzdpd3IzNml3NiJ9.uqGMqqnpdiBlrnzWaxMKMg"
});

class MapTest extends React.PureComponent {
  state = {
    zoom: [1],
    step: "continents",
    center: [0.8130060000328854, 46.55886205821483]
  };

  setStep = e => {
    let step;
    if (e.getZoom() < 3) {
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

  changeCenter = (lng, lat, zoom = 5) => {
    this.setState({
      zoom: [zoom],
      center: [lng, lat]
    })
  }

  render() {
    const { step, zoom, center } = this.state;
    const { wines, countries, currCountry, changeCurrCountry } = this.props;

    if (!wines.length) return <div>Loading...</div>

    // const lessWines = JSON.parse(wines).wines.slice(0, 100000);
    // const lessWines = JSON.parse(wines).wines.filter(wine => wine.country === currCountry);

    const ToRender = () => {
			if (step === "continents") {
				return (
					<Fragment>
						{ continents.map((continent, i) => (
							<Marker
							key={i}
              coordinates={[continent.longitude, continent.latitude]}
							>
								<ClusterCustom name={continent.name} changeCenter={() => this.changeCenter(continent.longitude, continent.latitude, 3)}/>
							</Marker>
						))}
					</Fragment>
				)	
			}
			if (step === "countries") {
				return (
					<Fragment>
						{ countries.map((countrie, i) => {
              if (countrie.name === currCountry) {
                const currCountryWines = wines.filter((wine, i) => (wine.country === currCountry));

                return (
                  <Layer
                    type="symbol"
                    id="marker"
                    layout={{ "icon-image": "marker-15" }}
                    key={i}
                  >
                    {
                      currCountryWines.map((wine, index) => (
                        <Feature key={`wine__${index}`} coordinates={[wine.longitude, wine.latitude]} />
                      ))
                    }
                  </Layer>
                ); 
              }

              const wineNumber = wines.filter(wine => wine.country === countrie.name).length;
              
              if (!wineNumber) return null;

              return (
                <Marker
                  key={i}
                  coordinates={[countrie.longitude, countrie.latitude]}
                >
                  <ClusterCustom
                    name={countrie.name}
                    changeCurrCountry={changeCurrCountry}
                    changeCenter={() => this.changeCenter(countrie.longitude, countrie.latitude)}
                    wineNumber={wineNumber}
                  />
                </Marker>
              )
            })}
					</Fragment>
				)
      }
      return (
        <Layer
          type="symbol"
          id="marker"
          layout={{ "icon-image": "marker-15" }}
        >
          { wines.map((wine, i) => (
              <Feature coordinates={[wine.longitude, wine.latitude]} />
              // <Feature coordinates={[wine.longitude, wine.latitude]} iconIgnorePlacement={true} />
          ))}
        </Layer>
      )
    }

    return (
      <Map
        style="mapbox://styles/gama9780/cjv6bfst903be1fnolsx2eih4"
        containerStyle={{ width: '100vw', height: '100vh', position: 'absolute', top: 0, left: 0, zIndex: 1 }}
        onZoom={this.setStep}
        zoom={zoom}
        center={center}
        onClick={(map, e) => console.log(e.lngLat)}
      >
        <ToRender />
      </Map>
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
		name: "Oceania"
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
		longitude: 28.24904034876191,
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