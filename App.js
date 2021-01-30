import 'react-native-gesture-handler';
import React from 'react';
import ReactNavigation from './src/config/ReactNavigation';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducer from './src/store/reducers/index';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <ReactNavigation />
    </Provider>
  );
};

export default App;
