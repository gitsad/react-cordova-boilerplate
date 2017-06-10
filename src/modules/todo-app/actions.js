/**
 * Created by gitsad on 10.06.17.
 */
import REDUX_CONST from './constants';

export function addTodo(text) {
  return {
    type: REDUX_CONST.ADD_TODO,
    text
  };
}

export function deleteTodo(id) {
  return {
    type: REDUX_CONST.DELETE_TODO,
    id
  };
}

export function editTodo(id, text) {
  return {
    type: REDUX_CONST.EDIT_TODO,
    id,
    text
  };
}

export function markTodo(id) {
  return {
    type: REDUX_CONST.MARK_TODO,
    id
  };
}

export function markAll() {
  return {
    type: REDUX_CONST.MARK_ALL
  };
}

export function clearMarked() {
  return {
    type: REDUX_CONST.CLEAR_MARKED
  };
}
