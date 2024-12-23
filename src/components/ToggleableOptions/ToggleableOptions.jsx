import React from "react";
import PropTypes from "prop-types";

import "./ToggleableOptions.css";

const ToggleableOptions = ({ options, currentValue, onChange }) => {
  return (
    <div className="toggleable-options">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onChange(option)}
          className={currentValue === option ? "active" : ""}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

ToggleableOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ToggleableOptions;
