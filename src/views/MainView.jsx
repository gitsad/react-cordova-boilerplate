import React from 'react';
import { Button } from '../components/button/Button.jsx';

export default class MainView extends React.Component {
    exitFromApp = () => {
        navigator.app.exitApp();
    };
    render() {
        return (
            <div className="StartView">
                <div className="logo">
                    <p>BOILEPLATE</p>
                </div>
                <div className="buttons">
                    <Button
                        text="Wyjście"
                        onClick={this.exitFromApp}
                    />
                </div>
            </div>
        );
    }
}
