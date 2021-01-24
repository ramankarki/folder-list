import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";

import { activeDropdown, folderModalState, deleteFolder } from "../../actions";
import "./DeleteModal.scss";

class DeleteModal extends React.Component {
  onCancelClick = (event) => {
    this.props.activeDropdown("cancel-delete");
    this.props.folderModalState("");
    event.stopPropagation();
  };

  onDeleteClick = (event) => {
    this.props.deleteFolder();
    this.onCancelClick(event);
  };

  render() {
    return ReactDOM.createPortal(
      <div className="dim-background">
        <section
          className="delete-modal"
          onClick={(event) => event.stopPropagation()}
        >
          <h4 className="delete-heading">Delete Folder</h4>
          <hr />
          <p className="delete-que">
            Are you sure you want to delete '
            {this.props.folderModalStateValue.split("-")[2]}' folder ?
          </p>
          <div className="buttons">
            <button className="delete-btn" onClick={this.onDeleteClick}>
              Delete
            </button>
            <button className="cancel-btn" onClick={this.onCancelClick}>
              Cancel
            </button>
          </div>
        </section>
      </div>,
      document.getElementById("delete-modal")
    );
  }
}

const mapStateToProps = (state) => {
  return { folderModalStateValue: state.folderModalState };
};

export default connect(mapStateToProps, {
  activeDropdown,
  folderModalState,
  deleteFolder,
})(DeleteModal);
