import React from "react";
import { connect } from "react-redux";
import { deleteTodoItem } from "../../actions";
import "./TodoItem.scss";

class TodoItem extends React.Component {
  state = { itemChecked: !this.props.pending };

  onItemChecked = () => {
    this.setState({ itemChecked: !this.state.itemChecked });
  };

  checkedItemClass = () => {
    if (this.state.itemChecked)
      return "todo-item-value todo-item-value-checked";
    return "todo-item-value";
  };

  cantEditCompleted = () => {
    if (this.state.itemChecked) return "invisible";
    return "";
  };

  onDeleteItem = () => {
    this.props.deleteTodoItem(this.props.activeTodoList._id, this.props.index);
  };

  render() {
    return (
      <section className="todo-item">
        <label className={this.checkedItemClass()}>
          <input
            type="checkbox"
            checked={this.state.itemChecked}
            onChange={this.onItemChecked}
          />
          {this.props.payload}
        </label>
        <div className="todo-item-settings">
          <i className={"bi bi-pencil-square" + this.cantEditCompleted()}></i>
          <i className="bi bi-x exit-icon" onClick={this.onDeleteItem}></i>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return { activeTodoList: state.activeTodoList };
};

export default connect(mapStateToProps, { deleteTodoItem })(TodoItem);
