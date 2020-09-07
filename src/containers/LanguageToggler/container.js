import React from "react";
import { connect } from "react-redux";

import { switchToEngLang, switchToUaLang } from "./actions";

import styles from "./styles.module.scss";

const LanguageToggler = ({ switchToUaLang, switchToEngLang }) => {
  return (
    <>
      <div className={styles["lang-btn-container"]}>
        <button
          className={"btn-change-lang btn-change-lang--en"}
          onClick={switchToEngLang}
        >
          EN
        </button>
        <button
          className={"btn-change-lang btn-change-lang--ua"}
          onClick={switchToUaLang}
        >
          UA
        </button>
      </div>
    </>
  );
};

const mapDispatchToPros = {
  switchToEngLang,
  switchToUaLang,
};

export default connect(null, mapDispatchToPros)(LanguageToggler);
