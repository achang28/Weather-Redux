import React from 'react';
import _ from 'lodash';
import Chart from '../comps/chart';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

let WeatherList = React.createClass({
  renderCity: function(city) {
    let cityName = `${city.city.name}, ${city.city.country}`;
    let points = city.list.length;
    let charts = {
      humidities: { data: new Array(points), color: "red" },
      pressures: { data: new Array(points), color: "blue" },
      temps: { data: new Array(points), color: "green" }
    };

    city.list.forEach((point, index) => {
      charts.humidities.data[index] = point.main.humidity;
      charts.pressures.data[index] = point.main.pressure;
      charts.temps.data[index] = point.main.temp;
    });

    return (
      <tr key={cityName}>
        <td>{cityName}</td>
        <td><Chart  {...charts.temps} /></td>
        <td><Chart  {...charts.pressures} /></td>
        <td><Chart  {...charts.humidities} /></td>
      </tr>
    )
  },

  render: function() {
    if (this.props.weather.length === 0)
      return (<div>No cities selected...</div>);
    else
      return (
        <table className="table table-hover">
          <thead>
            <tr>
              <td>City</td>
              <td>Temp</td>
              <td>Pressure</td>
              <td>Humidity</td>
            </tr>
          </thead>
          <tbody>
            { this.props.weather.map((city, index) => this.renderCity(city, index)) }
          </tbody>
        </table>
      );
  }
});

function mapStateToProps(state) {
  return { weather: state.weather };
}

let weatherListProps = connect(mapStateToProps);
export default weatherListProps(WeatherList);