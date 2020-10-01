import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

import Main from './main';

const Hot = hot(Main)

ReactDOM.render(<Hot/>, document.querySelector("#root"))