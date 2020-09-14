import React, { useCallback } from "react";
import styles from "./styles.module.scss";
import Button from "../../components/Button/component";
import Input from "../../components/Input/component";
import { compose } from "redux";
import withTranslate from "../../hoc/withTranslation";
import { Field, getFormValues, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const AddMovie = ({ handleSubmit, words, values }) => {
  const history = useHistory();

  const {
    "form-edit-or-add-movie-input-title": editTitle,
    "form-edit-or-add-movie-input-img": imgTitle,
    "form-edit-or-add-movie-input-director": directorTitle,
    "form-edit-or-add-movie-input-genres": genresTitle,
    "form-edit-or-add-movie-input-description": descriptionTitle,
    "form-edit-or-add-movie-btn-submit": submitTitle,
    "form-edit-or-add-movie-btn-go-back": goBackTitle,
  } = words;

  const goBack = (e) => {
    e.preventDefault();
    history.goBack();
  };

  const memoizedGoBack = useCallback(goBack, []);
  const memoizedHandleSubmit = useCallback(
    (e) => {
      handleSubmit(e, values);
    },
    [handleSubmit, values]
  );

  return (
    <>
      <form className={styles.form} onSubmit={memoizedHandleSubmit}>
        <Field
          name="title"
          component={Input}
          id={"addMovieTitle"}
          labelTitle={editTitle}
          type={"text"}
        />
        <Field
          name="posterUrl"
          component={Input}
          id={"addMovieImgUrl"}
          labelTitle={imgTitle}
          type={"text"}
        />
        <Field
          name="director"
          component={Input}
          id={"addMovieDirector"}
          labelTitle={directorTitle}
          type={"text"}
        />
        <Field
          name="genres"
          component={Input}
          id={"addMovieGenres"}
          labelTitle={genresTitle}
          type={"text"}
        />
        <Field
          name="description"
          component={Input}
          id={"addMovieDescription"}
          labelTitle={descriptionTitle}
          type={"textarea"}
        />

        <div>
          <Button title={submitTitle} type="submit" />
          <Button handleClick={memoizedGoBack} title={goBackTitle} />
        </div>
      </form>
    </>
  );
};

const mapStateToProps = (state) => ({
  values: getFormValues("add-movie-form")(state),
});

const withConnect = connect(mapStateToProps);

export default compose(
  reduxForm({ form: "add-movie-form" }),
  withTranslate,
  withConnect
)(AddMovie);
