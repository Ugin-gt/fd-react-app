import React from 'react';
import PropTypes from 'prop-types';
import styles from './FlexContainer.module.scss';

const FlexContainer = (props) => {
  const { children, jc, ai, fd } = props;
  const inlineStyles = {
    flexDirection: fd,
    justifyContent: jc,
    alignItems: ai,
  };
  return (
    <div style={inlineStyles} className={styles.container}>
      {children}
    </div>
  );
};

FlexContainer.propTypes = {
  children: PropTypes.element.isRequired,
  jc: PropTypes.string.isRequired,
  ai: PropTypes.string.isRequired,
  fd: PropTypes.string.isRequired,
};

export default FlexContainer;
