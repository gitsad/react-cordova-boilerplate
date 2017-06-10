import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SHOW_ALL, SHOW_MARKED, SHOW_UNMARKED } from '../../../constants/todo-filters.js';
import todoStyle from 'src/style/todo-style.scss';
import TodoItem from './TodoItem.jsx';
import Footer from './Footer.jsx';

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_UNMARKED]: todo => !todo.marked,
  [SHOW_MARKED]: todo => todo.marked
};

export default class MainSection extends Component {
  componentWillMount() {
    this.state = {
      filter: SHOW_ALL
    };
    this.handleClearMarked = this.handleClearMarked.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }

  handleClearMarked() {
    const { todos, clearMarked } = this.props;
    const atLeastOneMarked = todos.some(todo => todo.marked);
    if (atLeastOneMarked) {
      clearMarked();
    }
  }

  handleShow(filter) {
    this.setState({ filter });
  }

  renderToggleAll(markedCount) {
    const { todos, markAll } = this.props;
    if (todos.length > 0) {
      return (
        <input
          className={todoStyle['toggle-all']}
          type="checkbox"
          checked={markedCount === todos.length}
          onChange={markAll}
        />
      );
    }
    return undefined;
  }

  renderFooter(markedCount) {
    const { todos } = this.props;
    const { filter } = this.state;
    const unmarkedCount = todos.length - markedCount;

    if (todos.length) {
      return (
        <Footer
          markedCount={markedCount}
          unmarkedCount={unmarkedCount}
          filter={filter}
          onClearMarked={this.handleClearMarked}
          onShow={this.handleShow}
        />
      );
    }
    return undefined;
  }

  render() {
    const { filter } = this.state;
    const { todos, ...actions } = this.props;

    const filteredTodos = todos.filter(TODO_FILTERS[filter]);
    const markedCount = todos.reduce((count, todo) =>
      (todo.marked ? count + 1 : count),
      0
    );

    return (
      <section className={todoStyle.main}>
        {this.renderToggleAll(markedCount)}
        <ul className={todoStyle['todo-list']}>
          {filteredTodos.map(todo =>
            <TodoItem key={todo.id} todo={todo} {...actions} />
          )}
        </ul>
        {this.renderFooter(markedCount)}
      </section>
    );
  }
}
if (__DEV__) {
  // Not needed or used in minified mode
  MainSection.propTypes = {
    todos: PropTypes.arrayOf(TodoItem.propTypes.todo).isRequired,
    clearMarked: PropTypes.func.isRequired,
    markAll: PropTypes.func.isRequired
  };
}
