import React from 'react';
import PropTypes from 'prop-types';

const { Fragment } = React;

const SubHeader = ({ title }) => (
  <Fragment>
    <h3>{title}</h3>
    <h3>test</h3>
  </Fragment>
);


SubHeader.propTypes = {
  title: PropTypes.string,
};

SubHeader.defaultProps = {
  title: '',
};

export default SubHeader;
