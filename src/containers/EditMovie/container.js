import React, { useCallback } from "react";
import { useHistory } from "react-router";
import styles from "./styles.module.scss";
import Button from "../../components/Button/component";
import Input from "../../components/Input/component";
import withTranslate from "../../hoc/withTranslation";
import { reduxForm, Field, getFormValues } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import { getMovieToRender } from "../App/selectors";

const EditMovie = ({
  values,
  handleSubmit,
  words,
  movieToRender
}) => {
  const history = useHistory();

  const {id: movieID} = movieToRender;

  const goBack = (e) => {
    e.preventDefault();
    history.goBack();
  };

  const memoizedGoBack = useCallback(goBack, [])

  const memoizedHandleSubmit = useCallback((event) => {
    handleSubmit(movieID, event, values)
  }, [movieID, handleSubmit, values])

  const {
    "form-edit-or-add-movie-input-title": editTitle,
    "form-edit-or-add-movie-input-img": imgTitle,
    "form-edit-or-add-movie-input-director": directorTitle,
    "form-edit-or-add-movie-input-genres": genresTitle,
    "form-edit-or-add-movie-input-description": descriptionTitle,
    "form-edit-or-add-movie-btn-submit": submitTitle,
    "form-edit-or-add-movie-btn-go-back": goBackTitle,
  } = words;

  return (
    <>
      <form className={styles.form} onSubmit={memoizedHandleSubmit}>
        <Field
          name="title"
          id={"editMovieTitle"}
          labelTitle={editTitle}
          component={Input}
          type={"text"}
        />
        <Field
          name="posterUrl"
          component={Input}
          id={"editMovieImgUrl"}
          labelTitle={imgTitle}
          type={"text"}
        />
        <Field
          name="director"
          component={Input}
          id={"editMovieDirector"}
          labelTitle={directorTitle}
          type={"text"}
        />
        <Field
          name="genres"
          component={Input}
          id={"editMovieGenres"}
          labelTitle={genresTitle}
          type={"text"}
        />
        <Field
          name="description"
          component={Input}
          id={"editMovieDescription"}
          labelTitle={descriptionTitle}
          type={"textarea"}
        />

        <div>
          <Button
            title={submitTitle}
            type="submit"
          />
          <Button handleClick={memoizedGoBack} title={goBackTitle} />
        </div>
      </form>
    </>
  );
};

const mapStateToProps = (state) => ({
  movieToRender: getMovieToRender(state),
  values: getFormValues("edit-movie-form")(state),
});

const withConnect = connect(mapStateToProps);

export default compose(
  reduxForm({ form: "edit-movie-form" }),
  withTranslate,
  withConnect
)(EditMovie);
