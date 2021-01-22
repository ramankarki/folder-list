import React from "react";
import "./FolderCard.scss";

class FolderCard extends React.Component {
  render() {
    return (
      <section className="folderCard">
        <div className="settings-icon">
          <i className="bi bi-gear-fill"></i>
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

export default FolderCard;
