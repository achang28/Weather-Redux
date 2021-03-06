import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchWeather from '../actions/index';

let SearchBar = React.createClass({
  getInitialState: function() {
    return { input: '' }
  },

  componentWillMount: function() {

  },

  searchInput: function(e) {
    e.preventDefault();
    this.props.fetchWeather(this.state.input);
    this.setState({ input: ''})
  },

  updateInput: function(e) {
    this.setState({ input: e.target.value});
  },

  render: function() {
    return (
      <form className="input-group" onSubmit={this.searchInput}>
        <input
          className="form-control"
          onChange={this.updateInput}
          placeholder="Enter a city to get the latest forecast"
          value={this.state.input} /> 
        <span className="input-group-btn">
          <button
            type="submit"
            className="btn btn-secondary">Submit
          </button>
        </span>
      </form>
    );
  }
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather: fetchWeather }, dispatch);
}

let searchBarProps = connect(null, mapDispatchToProps);
export default searchBarProps(SearchBar);