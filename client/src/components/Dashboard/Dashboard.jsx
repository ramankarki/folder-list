import React from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import {
  fetchUser,
  createFolder,
  activeDropdown,
  fetchFolders,
} from "./../../actions/index";
import illustration from "./dashboard-illustration.svg";
import "./Dashboard.scss";
import FolderCard from "./../FolderCard/FolderCard";
import Modal from "./../CreateFolderModal/CreateFolderModal";

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
    this.props.fetchFolders();
  }

  renderFolders = () => {
    return this.props.folders.map((card, index) => (
      <FolderCard
        key={index + "-" + uuidv4()}
        index={"folder-settings-" + index}
        folderIndex={index}
        heading={card.title}
        desc={card.description ? card.description : null}
        createdAt={new Date(card.createdAt).toDateString()}
        updatedAt={new Date(card.updatedAt).toDateString()}
      />
    ));
  };

  render() {
    if (!this.props.user) {
      return "";
    }
    return (
      <section className="dashboard">
        <article className="dashboard-guideContainer container row no-gutters">
          <div className="dashboard-guide col-12 col-lg-6">
            <h1 className="dashboard-heading">
              Get Started, {this.props.user.name}
            </h1>
            <ul className="dashboard-guideline">
              <li>Create folder, add title, give some description</li>
              <li>Open folder, write your lists and download if you want</li>
              <li>Keep your different todo-list in different folders</li>
            </ul>
          </div>
          <picture className="dashboard-illustration col-12 col-lg-6">
            <img src={illustration} alt="svg illustration for dashboard" />
          </picture>
        </article>
        <section className="folders">
          <h3 className="folders-heading">{this.props.user.name}'s Folder</h3>
          <p className="folders-desc">
            Total folders: {this.props.folders.length}
          </p>
          <div className="folders-grid">{this.renderFolders()}</div>
        </section>
        <button className="add-folder">
          <i
            className="bi bi-plus-circle"
            onClick={(event) => {
              this.props.activeDropdown("create-folder");
              event.stopPropagation();
            }}
          ></i>
        </button>
        {this.props.activeDropdownState === "create-folder" ? (
          <Modal createFolder={this.props.createFolder} />
        ) : null}
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  if (!state.user) return { user: null };
  return {
    user: state.user.user,
    activeDropdownState: state.activeDropdown,
    folders: state.folders,
  };
};

export default connect(mapStateToProps, {
  fetchUser,
  createFolder,
  activeDropdown,
  fetchFolders,
})(Dashboard);
