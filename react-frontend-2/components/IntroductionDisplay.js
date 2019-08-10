import React from "react";
import ButtonSectionChange from "./ButtonSectionChange";
import PropTypes from 'prop-types';

const IntroductionDisplay = ({ sectionChange }) => {
  return (
    <div>
      <p>Welcome to the Test</p>
      <ButtonSectionChange sectionChange={ sectionChange } />
    </div>
  );
};

IntroductionDisplay.propTypes = {
  sectionChange: PropTypes.func.isRequired,
}
export default IntroductionDisplay;
