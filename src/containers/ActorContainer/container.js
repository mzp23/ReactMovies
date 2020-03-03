import React, { Component } from "react";
import Actor from "../../components/Actor/component";
import { withRouter } from "react-router-dom";

class ActorContainer extends Component {
  render() {
    const { location, actors, handleLogOut } = this.props;
    const actorId = +location.pathname.replace("/actor/", "");
    const actor = actors.filter(el => el.id === actorId)[0];
    return (
      <Actor biography={actor.biography} img={actor.imgUrl} name={actor.name} handleLogOut={handleLogOut} />
    );
  }
}

export default withRouter(ActorContainer);