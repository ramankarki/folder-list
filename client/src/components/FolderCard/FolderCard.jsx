import React from "react";
import { connect } from "react-redux";
import { activeDropdown } from "../../actions";
import "./FolderCard.scss";

class FolderCard extends React.Component {
  render() {
    return (
      <section className="folderCard">
        <div
          className="settings-icon"
          onClick={(event) => {
            this.props.activeDropdown(this.props.folderID);
            event.stopPropagation();
          }}
        >
          <i className="bi bi-gear-fill"></i>
          {this.props.activeDropdownState === this.props.folderID ? (
            <div className="folder-settings">
              <p>Edit</p>
              <p className="folder-delete">Delete</p>
            </div>
          ) : null}
        </div>
        <h4 className="folderCard-heading">{this.props.heading}</h4>
        <p className="folderCard-desc">{this.props.desc}</p>
        <div className="folderCard-date d-flex justify-content-between">
          <p>
            Created at
            <br />
            {this.props.createdAt}
          </p>
          <p>
            Updated at
            <br />
            {this.props.updatedAt}
          </p>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return { activeDropdownState: state.activeDropdown };
};

export default connect(mapStateToProps, { activeDropdown })(FolderCard);
