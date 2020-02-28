import React from "react";
import PropTypes from "prop-types";
import uuid from "uuid";

const Span = ({ array }) =>
  array.map((el, index) => {
    return index < array.length - 1 ? (
      <span key={uuid()}>{el}, </span>
    ) : (
      <span key={uuid()}>{el}</span>
    );
  });

export default Span;

Span.propTypes = {
  array: PropTypes.array.isRequired
};
