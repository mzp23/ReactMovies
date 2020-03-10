import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import Button from "../../components/Button/component";
import Input from "../../components/Input/component";
import Navigation from "../../components/Navigation/component";
import withTranslate from "../../hoc/withTranslation";
import { reduxForm, Field, getFormValues } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";

class EditMovie extends Component {
  render() {
    const {
      values,
      handleSubmit,
      handleLogOut,
      words,
      moviesToRender,
      movieToShowDescription,
      history
    } = this.props;

    const movieID = moviesToRender[movieToShowDescription].id;
    const goBack = e => {
      e.preventDefault();
      history.goBack();
    };

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

    return (
      <>
        <Navigation
          handleLogOut={handleLogOut}
          logOutTitle={logOutTitle}
          homepage={homepage}
        />
        <form className={styles.form} onSubmit={handleSubmit}>
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
  initialValues: state.moviesReducer.editMovieInfo,
  values: getFormValues("edit-movie-form")(state)
});

const withConnect = connect(mapStateToProps);

export default compose(
  reduxForm({ form: "edit-movie-form" }),
  withTranslate,
  withConnect
)(EditMovie);

EditMovie.propTypes = {
  description: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  posterUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
