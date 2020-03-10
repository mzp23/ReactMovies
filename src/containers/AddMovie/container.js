import React, { Component } from "react";
import styles from "./styles.module.scss";
import Button from "../../components/Button/component";
import Input from "../../components/Input/component";
import Navigation from "../../components/Navigation/component";
import uuid from "uuid";
import { compose } from "redux";
import withTranslate from "../../hoc/withTranslation";
import { Field, getFormValues, reduxForm } from "redux-form";
import { connect } from "react-redux";

class AddMovie extends Component {
  render() {
    const {
      title,
      posterUrl,
      director,
      genres,
      description,
      handleSubmit,
      handleLogOut,
      words,
      history,
      values
    } = this.props;
    const {
      "form-edit-or-add-movie-input-title": editTitle,
      "form-edit-or-add-movie-input-img": imgTitle,
      "form-edit-or-add-movie-input-director": directorTitle,
      "form-edit-or-add-movie-input-genres": genresTitle,
      "form-edit-or-add-movie-input-description": descriptionTitle,
      "navigation-menu-link-homepage": homepage,
      "navigation-logout-btn": logOutTitle,
      "form-edit-or-add-movie-btn-submit": submitTitle,
      "form-edit-or-add-movie-btn-go-back": goBackTitle
    } = words;

    const movieID = uuid();
    const goBack = e => {
      e.preventDefault();
      history.goBack();
    };

    return (
      <>
        <Navigation
          handleLogOut={handleLogOut}
          homepage={homepage}
          logOutTitle={logOutTitle}
        />
        <form className={styles.form} onSubmit={handleSubmit}>
          <Field
            name="title"
            component={Input}
            id={"addMovieTitle"}
            labelTitle={editTitle}
            value={title}
            type={"text"}
          />
          <Field
            name="posterUrl"
            component={Input}
            id={"addMovieImgUrl"}
            labelTitle={imgTitle}
            value={posterUrl}
            type={"text"}
          />
          <Field
            name="director"
            component={Input}
            id={"addMovieDirector"}
            labelTitle={directorTitle}
            value={director}
            type={"text"}
          />
          <Field
            name="genres"
            component={Input}
            id={"addMovieGenres"}
            labelTitle={genresTitle}
            value={genres}
            type={"text"}
          />
          <Field
            name="description"
            component={Input}
            id={"addMovieDescription"}
            labelTitle={descriptionTitle}
            value={description}
            type={"textarea"}
          />

          <div>
            <Button
              handleClick={event => handleSubmit(movieID, event, values)}
              title={submitTitle}
              type="submit"
            />
            <Button handleClick={goBack} title={goBackTitle} />
          </div>
        </form>
      </>
    );
  }
}

const mapStateToProps = state => ({
  values: getFormValues("add-movie-form")(state)
});

const withConnect = connect(mapStateToProps);

export default compose(
  reduxForm({ form: "add-movie-form" }),
  withTranslate,
  withConnect
)(AddMovie);
