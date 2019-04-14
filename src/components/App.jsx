// import React from 'react';
// import PropTypes from 'prop-types';
import Sum from './Sum';
import Count from './Count';

// TODO rework in JSS with ability to receive styles from props.
import '../css/app.less';
import '../css/test.css'; // looks like not appended to App.jsx in react-experiments usage

const App = {
    Sum,
    Count
};

export { Sum };
export { Count };
export default App;