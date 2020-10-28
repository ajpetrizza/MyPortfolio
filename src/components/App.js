import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation';
import 'semantic-ui-css/semantic.min.css';

class App extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <Navigation/>
        );
    }
};


export default App;