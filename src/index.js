import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import finalCreateStore from './stores/store';
import './css/index.css';
import Search from './components/pages/Search';
import * as serviceWorker from './serviceWorker';

const store = finalCreateStore();

ReactDOM.render(<Provider store={store}><Search /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
