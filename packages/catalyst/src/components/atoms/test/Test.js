import React from 'react'; 
import PropTypes from 'prop-types'; 
import './Test.css';

const Test = ({label}) => <div className="test">{label}</div>;


Test.defaultProps = {
  label: 'defaultProps Rendered',
};

Test.propTypes = {
  label: PropTypes.string,
};

export default Test;