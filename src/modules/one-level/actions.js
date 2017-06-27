/**
 * Created by gitsad on 13.06.17.
 */
import REDUX_CONST from './constants';

export function setLevel(level) {
    return {
        type: REDUX_CONST.SET_LEVEL,
        level
    }
}