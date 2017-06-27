/**
 * Created by gitsad on 13.06.17.
 */
import REDUX_CONST from './constants';

export default function oneLevelReducer(state = {}, action) {
    switch (action.type) {
        case REDUX_CONST.SET_LEVEL:
            return({
                ...state,
                chosenLevel: action.level
            });
        default:
            return state;
    }
}