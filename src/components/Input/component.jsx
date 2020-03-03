import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

const Input = props => {
  const { value, id, type, labelTitle, onChange } = props;
  return (
    <div className={styles.wrapper}>
      {type === "textarea" ? (
        <textarea className={styles.input} id={id} onChange={onChange} rows={20} value={value}>
          {value}
        </textarea>
      ) : (
        <input
          type={type}
          className={styles.input}
          value={value}
          id={id}
          onChange={onChange}
        />
      )}

      <label className={styles.label} htmlFor={id}>
        {labelTitle}:{" "}
      </label>
    </div>
  );
};

export default Input;

Input.propTypes = {
  id: PropTypes.string.isRequired,
  labelTitle: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};