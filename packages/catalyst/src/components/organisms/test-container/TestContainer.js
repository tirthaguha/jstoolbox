import React from 'react'; 
import PropTypes from 'prop-types'; 
import './TestContainer.css';

const TestContainer = ({label}) => <div className="testContainer">{label}</div>;


TestContainer.defaultProps = {
  label: 'defaultProps Rendered',
};

TestContainer.propTypes = {
  label: PropTypes.string,
};

export default TestContainer;