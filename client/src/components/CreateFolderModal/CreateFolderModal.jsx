import React from "react";
import ReactDOM from "react-dom";

import { connect } from "react-redux";
import { onModalFieldChange } from "./../../actions/index";
import "./CreateFolderModal.scss";

class CreateFolder extends React.Component {
  onSubmit = (event) => {
    event.preventDefault();
    this.props.createFolder(this.props.modalTitle, this.props.modalDesc);

    this.props.onModalFieldChange("title", "");
    this.props.onModalFieldChange("desc", "");
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
  };
};

export default connect(mapStateToProps, { onModalFieldChange })(CreateFolder);
