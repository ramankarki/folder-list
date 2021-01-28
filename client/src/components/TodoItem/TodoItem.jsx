import React from "react";

import "./TodoItem.scss";

class TodoItem extends React.Component {
  state = { itemChecked: false };

  onItemChecked = () => {
    this.setState({ itemChecked: !this.state.itemChecked });
  };

  render() {
    return (
      <section className="todo-item">
        <label className="todo-item-value">
          <input
            type="checkbox"
            checked={this.state.itemChecked}
            onChange={this.onItemChecked}
          />
          item one item item one item item one item item one item item one item
          item one item
        </label>
        <div className="todo-item-settings">
          <i className="bi bi-pencil-square"></i>
          <i className="bi bi-x exit-icon"></i>
        </div>
      </section>
    );
  }
}

export default TodoItem;
