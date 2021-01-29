import React from "react";
import { connect } from "react-redux";
import { fetchFolder, createTodoItem } from "../../actions";
import { Spinner } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.scss";

class TodoList extends React.Component {
  state = { activeTab: "All", newItem: "" };
  inputField = React.createRef();

  activeTab = (tab) => {
    if (tab === this.state.activeTab) return "tabs tabs-active";
    return "tabs";
  };

  setActiveTab = (event) =>
    this.setState({ activeTab: event.target.textContent });

  onAddItemChange = (event) => {
    this.setState({ newItem: event.target.value });
  };

  onTodoItemSubmit = (event) => {
    event.preventDefault();

    if (this.state.newItem.trim()) {
      this.props.createTodoItem(this.props.activeTodoList._id, {
        status: "pending",
        payload: this.state.newItem.trim(),
      });
    }
    this.setState({ newItem: "" });
    this.inputField.current.focus();
  };

  renderTodoItem = () => {
    let list = this.props.activeTodoList.listData;

    if (this.state.activeTab === "Pending") {
      list = list.filter(
        (item) => item.status === "pending"
      );
    } else if (this.state.activeTab === "Completed") {
      list = list.filter(
        (item) => item.status === "completed"
      );
    }

    return list.map((item, index) => {
      return (
        <TodoItem
          key={uuidv4()}
          index={index}
          status={item.status}
          payload={item.payload}
        />
      );
    });
  };

  componentDidMount() {
    this.props.fetchFolder(null, this.props.match.params.id);
  }

  render() {
    if (!this.props.activeTodoList) {
      return (
        <div className="loading-screen">
          <Spinner animation="border" variant="info" />
        </div>
      );
    }

    return (
      <section className="todo-list-route">
        <div className="todo-list-route-container container">
          <header>
            <h1 className="todo-title">{this.props.activeTodoList.title}</h1>
            <p className="todo-desc">{this.props.activeTodoList.description}</p>
          </header>
          <section className="todo-list">
            <header className="todo-list-tabs">
              <button
                className={this.activeTab("All")}
                onClick={this.setActiveTab}
              >
                All
              </button>
              <button
                className={this.activeTab("Pending")}
                onClick={this.setActiveTab}
              >
                Pending
              </button>
              <button
                className={this.activeTab("Completed")}
                onClick={this.setActiveTab}
              >
                Completed
              </button>
            </header>
            <form onSubmit={this.onTodoItemSubmit} className="todo-form">
              <input
                type="text"
                placeholder="Add Item"
                value={this.state.newItem}
                onChange={this.onAddItemChange}
                ref={this.inputField}
              />
              {this.props.todoListRequestLoading === "create" ? (
                <Spinner
                  animation="border"
                  variant="info"
                  style={{ marginTop: ".4rem", marginRight: "1.5rem" }}
                />
              ) : (
                <button>Add</button>
              )}
            </form>
            <section className="todo-items">{this.renderTodoItem()}</section>
          </section>
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

export default connect(mapStateToProps, { fetchFolder, createTodoItem })(
  TodoList
);
