/**
 * Created by gitsad on 12.06.17.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../actions.js';
import * as CredentialsActions from '../../auth/actions';
import auth from '../../../common/auth.js';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import todoStyle from 'src/style/todo-style.scss';
import TodoItem from '../components/TodoItem';
import credentialsPropTypes from '../../../containers/CredentialPropTypes';

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
    credentialsActions: credentialsPropTypes.credentialsActions,
    todoActions: propTypes.todoActions
  };
}

const TodoApp = connect(state => ({ todos: state.todos }), dispatch => ({
  credentialsActions: bindActionCreators(CredentialsActions, dispatch),
  todoActions: bindActionCreators(TodoActions, dispatch)
}))(TodoAppComponent);

export default TodoApp;
