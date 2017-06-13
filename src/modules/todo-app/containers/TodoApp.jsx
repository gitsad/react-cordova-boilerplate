import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../actions.js';
import * as CredentialsActions from '../../../actions/credentials-actions.js';
import auth from '../../../common/auth.js';
import Header from '../components/Header.jsx';
import MainSection from '../components/MainSection.jsx';
import todoStyle from 'src/style/todo-style.scss';
import TodoItem from '../components/TodoItem.jsx';

const propTypes = {
  todoActions: PropTypes.shape({
    addTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired,
    markTodo: PropTypes.func.isRequired,
    markAll: PropTypes.func.isRequired,
    clearMarked: PropTypes.func.isRequired
  }).isRequired
};

class TodoAppComponent extends Component {
  handleLogout = () => {
    auth.logout();
    this.props.credentialsActions.clearCredentials();
  };
  render() {
    const { todos, todoActions } = this.props;
    return (
      <div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button style={{ marginTop: '5px' }} onClick={this.handleLogout}>Logout</button>
        </div>
        <section className={todoStyle.todoapp}>
          <div>
            <Header {...todoActions} />
            <MainSection todos={todos} {...todoActions} />
          </div>
        </section>
      </div>
    );
  }
}

if (__DEV__) {
  // Not needed or used in minified mode
  TodoAppComponent.propTypes = {
    todos: PropTypes.arrayOf(TodoItem.propTypes.todo).isRequired,
    todoActions: propTypes.todoActions
  };
}

const TodoApp = connect(state => ({ todos: state.todos }), dispatch => ({
  credentialsActions: bindActionCreators(CredentialsActions, dispatch),
  todoActions: bindActionCreators(TodoActions, dispatch)
}))(TodoAppComponent);

export default TodoApp;
