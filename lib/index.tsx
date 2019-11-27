import React from 'react';
import ReactDom from 'react-dom';
import Button from './Button/button';
import Icon from './Icon/icon';

function App() {
    return (
        <div>
            {/*<h1>刘德华</h1>*/}
            <Button/>
            <Icon
                name='wechat'
                onMouseEnter={() => console.log('enter')}
                onMouseLeave={() => console.log('leave')}
                onTouchStart={() => console.log('touch')}
            />
        </div>
    );
}

ReactDom.render(<App/>, document.getElementById('root'));
