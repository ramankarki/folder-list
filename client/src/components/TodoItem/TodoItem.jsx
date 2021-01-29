import React from "react";
import { connect } from "react-redux";
import { deleteTodoItem, editTodoItem } from "../../actions";
import "./TodoItem.scss";

class TodoItem extends React.Component {
  checkedItemClass = () => {
    if (this.props.status === "completed")
      return "todo-item-value todo-item-value-checked";
    return "todo-item-value";
  };

  cantEditCompleted = () => {
    if (this.props.status === "completed") return "invisible";
    return "";
  };

  onDeleteItem = () => {
    this.props.deleteTodoItem(this.props.activeTodoList._id, this.props.index);
  };

  changeStatus = () => {
    this.changeStatusLater = setTimeout(() => {
      this.props.editTodoItem(this.props.activeTodoList._id, this.props.index, {
        status: this.props.status === "completed" ? "pending" : "completed",
        payload: this.props.payload,
      });
    }, 0);
  };

  componentWillUnmount() {
    clearTimeout(this.changeStatusLater);
  }

  render() {
    return (
      <section className="todo-item">
        <label className={this.checkedItemClass()}>
          <input
            type="checkbox"
            checked={this.props.status === "completed" ? true : false}
            onChange={this.changeStatus}
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
  return {
    activeTodoList: state.activeTodoList,
    todoListRequestLoading: state.todoListRequestLoading,
  };
};

export default connect(mapStateToProps, { deleteTodoItem, editTodoItem })(
  TodoItem
);
