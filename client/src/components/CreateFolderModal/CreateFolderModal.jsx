import React from "react";
import ReactDOM from "react-dom";

import { connect } from "react-redux";
import {
  onModalFieldChange,
  activeDropdown,
  updateFolder,
  folderModalState,
} from "./../../actions/index";
import "./CreateFolderModal.scss";

class CreateFolder extends React.Component {
  onSubmit = (event) => {
    event.preventDefault();

    if (this.props.folderModalStateValue === "create") {
      this.props.createFolder(this.props.modalTitle, this.props.modalDesc);
    } else if (this.props.folderModalStateValue.startsWith("edit")) {
      const folderID = this.props.folderModalStateValue.split(" ")[1];
      this.props.updateFolder(folderID, {
        title: this.props.modalTitle,
        description: this.props.modalDesc,
      });
    }

    this.props.onModalFieldChange("title", "");
    this.props.onModalFieldChange("desc", "");
    this.props.activeDropdown("exit-modal-btn");
    this.props.folderModalState("");
  };

  render() {
    return ReactDOM.createPortal(
      <div className="dim-background">
        <div className="exit-modal-btn">
          <i className="bi bi-x"></i>
        </div>
        <form
          onSubmit={this.onSubmit}
          onClick={(event) => event.stopPropagation()}
          className="add-folder-modal"
        >
          <input
            type="text"
            name="title"
            placeholder="Title"
            autoFocus
            required
            value={this.props.modalTitle}
            onChange={(event) =>
              this.props.onModalFieldChange("title", event.target.value)
            }
          />
          <input
            type="text"
            name="desc"
            placeholder="Description"
            value={this.props.modalDesc}
            onChange={(event) =>
              this.props.onModalFieldChange("desc", event.target.value)
            }
          />
          <button className="add-folder-btn">Add</button>
        </form>
      </div>,
      document.getElementById("create-folder-modal")
    );
  }
}

const mapStateToProps = (state) => {
  return {
    modalTitle: state.modalTitle,
    modalDesc: state.modalDesc,
    folderModalStateValue: state.folderModalState,
  };
};

export default connect(mapStateToProps, {
  onModalFieldChange,
  activeDropdown,
  updateFolder,
  folderModalState,
})(CreateFolder);
