import React from 'react';
import { render } from 'react-dom';
import Pomodoro from './pomodoro.js';

const App = () => {
    return <Pomodoro />;
}

render(React.createElement(App), document.getElementById('root'));