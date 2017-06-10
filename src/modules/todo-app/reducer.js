/**
 * Created by gitsad on 10.06.17.
 */
import REDUX_CONST from './constants';

const initialState = [{
  text: 'Use Redux',
  marked: false,
  id: 0
}];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case REDUX_CONST.ADD_TODO:
      return [{
        id: (state.length === 0) ? 0 : state[0].id + 1,
        marked: false,
        text: action.text
      }, ...state];

    case REDUX_CONST.DELETE_TODO:
      return state.filter(todo =>
        todo.id !== action.id
      );

    case REDUX_CONST.EDIT_TODO:
      return state.map(todo =>
        (todo.id === action.id ? {
          ...todo, text: action.text
        } :
          todo)
      );

    case REDUX_CONST.MARK_TODO:
      return state.map(todo =>
        (todo.id === action.id ? {
          ...todo, marked: !todo.marked
        } :
          todo)
      );

    case REDUX_CONST.MARK_ALL: {
      const areAllMarked = state.every(todo => todo.marked);
      return state.map(todo => ({
        ...todo,
        marked: !areAllMarked
      }));
    }

    case REDUX_CONST.CLEAR_MARKED:
      return state.filter(todo => todo.marked === false);

    default:
      return state;
  }
}
