import React from 'react';
import ReactDom from 'react-dom';
import Button from './Button/index';
import Icon from './Icon/index';

function App() {
    return (
        <div>
            <h1>刘德华</h1>
            <Button/>
            <Icon name='wechat'/>
        </div>
    );
}

ReactDom.render(<App/>, document.getElementById('root'));
