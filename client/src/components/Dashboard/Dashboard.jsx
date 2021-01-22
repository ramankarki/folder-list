import React from "react";
import { connect } from "react-redux";

import { fetchUser } from "./../../actions/index";
import illustration from "./dashboard-illustration.svg";
import "./Dashboard.scss";

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    if (!this.props.user) {
      return "";
    }
    return (
      <section className="dashboard">
        <article className="dashboard-guideContainer container row">
          <div className="dashboard-guide col-lg-6">
            <h1 className="dashboard-heading">
              Get Started, {this.props.user.name}
            </h1>
            <ul className="dashboard-guideline">
              <li>Create folder, add title, give some description</li>
              <li>Open folder, write your lists and download if you want</li>
              <li>Keep your different todo-list in different folders</li>
            </ul>
          </div>
          <picture className="dashboard-illustration col-lg-6">
            <img src={illustration} alt="svg illustration for dashboard" />
          </picture>
        </article>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  if (!state.user) return { user: null };
  return { user: state.user.user };
};

export default connect(mapStateToProps, { fetchUser })(Dashboard);
