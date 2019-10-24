import React from 'react';
import '../importIcons';

interface IconProps {
    name: string
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
    const {name} = props;
    return (
        <span>
             <svg>
                 <use xlinkHref={`#${name}`}/>
             </svg>
        </span>
    );
};

export default Icon;
