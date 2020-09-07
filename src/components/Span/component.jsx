import React from "react";
import PropTypes from "prop-types";
import uuid from "uuid";

const Span = ({ array,  handleActor}) =>
  array.map((el, index) => {
    return index < array.length - 1 ? (
      <span key={uuid()} onClick={() => el.name ? handleActor(el.id) : null} >{el.name || el}, </span>
    ) : (
      <span key={uuid()} onClick={() => el.name ? handleActor(el.id) : null}>{el.name || el}</span>
    );
  });

export default Span;

Span.propTypes = {
  array: PropTypes.array.isRequired
};
