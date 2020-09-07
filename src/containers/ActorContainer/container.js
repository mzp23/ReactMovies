import React from "react";
import Actor from "../../components/Actor/component";
import { withRouter } from "react-router-dom";
import withTranslate from "../../hoc/withTranslation";
import { compose } from "redux";
import { connect } from "react-redux";

const ActorContainer = ({ location, actors, handleLogOut, words }) => {
  const actorId = +location.pathname.replace("/actor/", "");
  const actor = actors.filter((el) => el.id === actorId)[0];

  return (
    <Actor
      words={words}
      biography={actor.biography}
      img={actor.imgUrl}
      name={actor.name}
      handleLogOut={handleLogOut}
    />
  );
};

const mapStateToProps = ({ moviesReducer}) => ({
  actors: moviesReducer.actors
})

const withConnect = connect(mapStateToProps)


export default compose(withRouter, withTranslate, withConnect)(ActorContainer);
