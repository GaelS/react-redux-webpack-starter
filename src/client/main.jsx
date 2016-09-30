import React from 'react';
import { render } from 'react-dom';

import { createStore } from 'redux'
import reducer from './flux/reducer.js';
import { Provider } from 'react-redux';

import App from './components/App.jsx';

let store = createStore(
	reducer
);

render(
	<Provider store={ store } >
		<App/>
	</Provider>,
	document.getElementById('app')
);
