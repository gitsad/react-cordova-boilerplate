import React from 'react';
import ReactDOM from 'react-dom';
import App from 'src/containers/App.jsx';
import AppRoute from 'src/containers/AppRoute.jsx';
import '../style/main.scss';

ReactDOM.render(
    <App>
        <AppRoute />
    </App>,
    document.getElementById('app')
);
