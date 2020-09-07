import React from "react";
import * as en from "../int/en";
import * as ua from "../int/ua";
import styles from "../containers/App/styles.module.scss";
const withTranslate = WrappedComponent => {
  class Translated extends React.Component {
    state = {
      language: "en"
    };

    componentDidMount() {
      const that = this;
      const languageFromLS = localStorage.getItem("language");
      that.setState({ language: languageFromLS ? languageFromLS : "en" });
    }

    handleChangeLanguage = e => {
      const languageToLS = e.target.classList.contains("btn-change-lang--en")
        ? "en"
        : "ua";
      localStorage.setItem("language", languageToLS);
      const languageFromLS = localStorage.getItem("language");
      this.setState({
        language: languageFromLS
      });
    };

    render() {
      const languageToRender = this.state.language === "en" ? en : ua;
      const { default: words } = languageToRender;
      return (
        <>
          <div className={styles["lang-btn-container"]}>
            <button
              className={"btn-change-lang btn-change-lang--en"}
              onClick={e => this.handleChangeLanguage(e)}
            >
              EN
            </button>
            <button
              className={"btn-change-lang btn-change-lang--ua"}
              onClick={e => this.handleChangeLanguage(e)}
            >
              UA
            </button>
          </div>
          <WrappedComponent
            {...this.props}
            words={words}
            handleChangeLanguage={this.handleChangeLanguage}
          />
        </>
      );
    }
  }

  return Translated;
};

export default withTranslate;
