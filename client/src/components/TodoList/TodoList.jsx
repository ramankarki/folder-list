import React from "react";
import { connect } from "react-redux";
import { fetchFolder } from "../../actions";
import { Spinner } from "react-bootstrap";

import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.scss";

class TodoList extends React.Component {
  state = { activeTab: "All" };

  activeTab = (tab) => {
    if (tab === this.state.activeTab) return "tabs tabs-active";
    return "tabs";
  };

  setActiveTab = (event) =>
    this.setState({ activeTab: event.target.textContent });

  onTodoItemSubmit = (event) => {
    event.preventDefault();
  };

  renderTodoItem = () => {
    return this.props.activeTodoList.listData.map((item) => {
      return (
        <TodoItem
          pending={item.status === "pending" ? true : false}
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
      <section className="todo-list-route container">
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
            <input type="text" placeholder="Add Item" />
            <button>Add</button>
          </form>
          <section className="todo-items">{this.renderTodoItem()}</section>
        </section>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return { activeTodoList: state.activeTodoList };
};

export default connect(mapStateToProps, { fetchFolder })(TodoList);
