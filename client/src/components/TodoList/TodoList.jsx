import React from "react";
import { connect } from "react-redux";
import { fetchFolder } from "../../actions";

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

  componentDidMount() {
    this.props.fetchFolder(null, this.props.match.params.id);
  }

  render() {
    return (
      <section className="todo-list-route container">
        <header>
          <h1 className="todo-title">Shooping list</h1>
          <p className="todo-desc">this is desc of this todo list</p>
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
          <section className="todo-items">
            <TodoItem />
          </section>
        </section>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return { activeTodoList: state.activeTodoList };
};

export default connect(mapStateToProps, { fetchFolder })(TodoList);
