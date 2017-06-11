import React, { Component } from 'react';
import PropTypes from 'prop-types';
import todoStyle from 'src/style/todo-style.scss';
import TodoTextInput from './TodoTextInput';

export default class TodoItem extends Component {
  componentWillMount() {
    this.state = {
      editing: false
    };
    this.handleDoubleClick = this.handleDoubleClick.bind(this);
  }

  handleDoubleClick() {
    this.setState({ editing: true });
  }

  handleSave(id, text) {
    if (text.length === 0) {
      this.props.deleteTodo(id);
    } else {
      this.props.editTodo(id, text);
    }
    this.setState({ editing: false });
  }

  render() {
    const { todo, markTodo, deleteTodo } = this.props;

    let element;
    if (this.state.editing) {
      element = (
        <TodoTextInput
          defaultText={todo.text}
          editing={this.state.editing}
          onSave={text => this.handleSave(todo.id, text)}
        />
      );
    } else {
      element = (
        <div className={todoStyle.view}>
          <input
            className={todoStyle.toggle}
            type="checkbox"
            checked={todo.marked}
            onChange={() => markTodo(todo.id)}
          />
          <label onDoubleClick={this.handleDoubleClick}>
            {todo.text}
          </label>
          <button
            className={todoStyle.destroy}
            onClick={() => deleteTodo(todo.id)}
          />
        </div>
      );
    }

    return (
      <li
        className={(`${todo.marked ? todoStyle.completed : ''} ${this.state.editing ? todoStyle.editing : ''}`).trim()}
      >
        {element}
      </li>
    );
  }
}
if (__DEV__) {
  // Not needed or used in minified mode
  TodoItem.propTypes = {
    todo: PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string,
      marked: PropTypes.bool
    }).isRequired,
    editTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    markTodo: PropTypes.func.isRequired
  };
}
