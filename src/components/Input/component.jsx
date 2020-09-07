import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

const Input = props => {
  const { id, type, labelTitle,input } = props;
    return (
    <div className={styles.wrapper}>
      {type === "textarea" ? (
        <textarea className={styles.input} id={id} onChange={(e) => input.onChange(e)} rows={20} value={input.value}>
          {input.value}
        </textarea>
      ) : (
        <input
          type={type}
          className={styles.input}
          value={input.value}
          id={id}
          onChange={(e) => input.onChange(e)}
          {...props}
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
  type: PropTypes.string.isRequired,
};