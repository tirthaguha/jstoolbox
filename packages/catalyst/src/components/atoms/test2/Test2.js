import React from 'react'; 
import PropTypes from 'prop-types'; 
import './Test2.css';

const Test2 = ({label}) => <div className="test2">{label}</div>;


Test2.defaultProps = {
  label: 'defaultProps Rendered',
};

Test2.propTypes = {
  label: PropTypes.string,
};

export default Test2;