import React, { useState, useEffect } from "react";
import * as en from "../int/en";
import * as ua from "../int/ua";
import { connect } from "react-redux";

import { compose } from "redux";
const withTranslate = (WrappedComponent) => {
  const Translated = ({
    languageToRender,
    switchToEngLang,
    switchToUaLang,
    ...props
  }) => {
    const [language, setLanguage] = useState("");

    useEffect(() => {
      const languageFromLS = localStorage.getItem("language");
      
      if (languageFromLS && !language) {
        setLanguage(languageFromLS);

      } else if (languageFromLS && languageToRender !== languageFromLS) {
        localStorage.setItem("language", languageToRender);
        setLanguage(languageToRender);

      } else if (!languageFromLS) {
        localStorage.setItem("language", languageToRender);
        setLanguage(languageToRender);

      } else if (languageFromLS) {
        setLanguage(languageFromLS);
      }
    }, [languageToRender, language]);

    const { default: words } = language === "en" ? en : ua;

    return <WrappedComponent {...props} words={words} />;
  };

  return Translated;
};

const mapStateToProps = ({ languageReducer }) => ({
  languageToRender: languageReducer.language,
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect, withTranslate);
