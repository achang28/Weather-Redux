import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import qRedux from 'redux-promise';
import reducers from './reducers';
import SearchBar from './shells/sh_search_bar';
import WeatherList from './shells/sh_weather_list';

var App = React.createClass({
  render: function() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
});


const createStoreWithMiddleware = applyMiddleware(qRedux)(createStore);
var Comp =
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>;

ReactDOM.render(Comp, document.querySelector('#app'));
