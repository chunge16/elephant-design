import React from 'react';
import ReactDom from 'react-dom';
import Button from './Button/index';

function App() {
    return (
        <div>
            <h1>刘德华</h1>
            <Button />
        </div>
    );
}

ReactDom.render(<App/>, document.getElementById('root'));