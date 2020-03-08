import React, { Component } from "react";
import Actor from "../../components/Actor/component";
import { withRouter } from "react-router-dom";
import withTranslate from "../../hoc/withTranslation";

class ActorContainer extends Component {
  render() {
    console.log(2);
    const { location, actors, handleLogOut, words } = this.props;
    const actorId = +location.pathname.replace("/actor/", "");
    const actor = actors.filter(el => el.id === actorId)[0];
    return (
      <Actor
        words={words}
        biography={actor.biography}
        img={actor.imgUrl}
        name={actor.name}
        handleLogOut={handleLogOut}
      />
    );
  }
}

export default withRouter(withTranslate(ActorContainer));