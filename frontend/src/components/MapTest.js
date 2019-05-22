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

  // componentDidUpdate = prevProps => {
  //   console.log("prevProps: ", prevProps.currentColors);
  //   console.log("props: ", this.props.currentColors);
  // }

  toRender = () => {
    const { step } = this.state;
    const { wines, countries, currCountry, changeCurrCountry, currentColors } = this.props;

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
                const redWines = currCountryWines.filter(wine => wine.color === "red");
                const whiteWines = currCountryWines.filter(wine => wine.color === "white");
                const pinkWines = currCountryWines.filter(wine => wine.color === "pink");

                return (
                  <Fragment key={`fragment__${i}`}>
                    <Layer
                      key={`redLayer__${i}`}
                      type="circle"
                      paint={
                        {
                          "circle-color": "#D71140",
                          "circle-radius": 3
                        }
                      }
                    >
                      {
                        redWines.map((wine, index) => (
                          <Feature key={`redWine__${index}`} coordinates={[wine.longitude, wine.latitude]} />
                        ))
                      }
                    </Layer>
                    <Layer
                      key={`whiteLayer__${i}`}
                      type="circle"
                      paint={
                        {
                          "circle-color": "#FFE8B5",
                          "circle-radius": 3
                        }
                      }
                    >
                      {
                        whiteWines.map((wine, index) => (
                          <Feature key={`whiteWine__${index}`} coordinates={[wine.longitude, wine.latitude]} />
                        ))
                      }
                    </Layer>
                    <Layer
                      key={`pinkLayer__${i}`}
                      type="circle"
                      paint={
                        {
                          "circle-color": "#EE98AC",
                          "circle-radius": 3
                        }
                      }
                    >
                      {
                        pinkWines.map((wine, index) => (
                          <Feature key={`pinkWine__${index}`} coordinates={[wine.longitude, wine.latitude]} />
                        ))
                      }
                    </Layer>
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
                currentColors.white ? pinkWines.length : 0,
              ];

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
                    data={colorData}
                  />
                </Marker>
              )
            })}
					</Fragment>
				)
      }
      return (
        <Layer
          type="heatmap"
        >
          { wines.map((wine, i) => (
              <Feature key={`feature__${i}`} coordinates={[wine.longitude, wine.latitude]}/>
          ))}
        </Layer>
      )
    }

  render() {
    const { zoom, center } = this.state;
    const { wines } = this.props;

    if (!wines.length) return <div>Loading...</div>

    return (
      <Map
        style="mapbox://styles/gama9780/cjv6bfst903be1fnolsx2eih4"
        containerStyle={{ width: '100vw', height: '100vh', position: 'absolute', top: 0, left: 0, zIndex: 1 }}
        onZoom={this.setStep}
        zoom={zoom}
        center={center}
        onClick={(map, e) => console.log(e.lngLat)}
      >
        {this.toRender()}
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