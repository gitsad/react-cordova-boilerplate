import { hashHistory } from 'react-router';

export const mainURL = {
    mainView: '/',
};

export const childURL = {
};

export function redirectToMainView() {
    hashHistory.push(mainURL.mainView);
}
