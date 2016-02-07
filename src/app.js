import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import reducers from './reducers';
import SearchBar from './comps/c_search_bar';

var App = React.createClass({
  render: function() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
});


const createStoreWithMiddleware = applyMiddleware()(createStore);
var Comp = <App />
  // <Provider store={createStoreWithMiddleware(reducers)}>
    // <App />
  // </Provider>;

ReactDOM.render(Comp, document.querySelector('#app'));
