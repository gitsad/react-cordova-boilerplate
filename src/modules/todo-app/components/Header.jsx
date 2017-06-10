import React from 'react';
import PropTypes from 'prop-types';
import todoStyle from 'src/style/todo-style.scss';
import TodoTextInput from './TodoTextInput.jsx';

export default class Header extends React.Component {
  handleSave = (text) => {
    if (text.length !== 0) {
      this.props.addTodo(text);
    }
  };
  render() {
    return (
      <header className={todoStyle.header}>
        <h1>Todos</h1>
        <TodoTextInput
          newTodo
          onSave={this.handleSave}
          placeholder="What needs to be done?"
        />
      </header>
    );
  }
}

if (__DEV__) {
  // Not needed or used in minified mode
  Header.propTypes = {
    addTodo: PropTypes.func.isRequired
  };
}