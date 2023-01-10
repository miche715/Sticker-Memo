import React from 'react';

import Color from '../../utilities/color';

const style = {
    wrapper: {
        width: "300px", 
        height: `calc(100% - 64px)`, 

        position: "fixed", 
        top: "62px", 
        left: `calc(100% - 302px)`, 

        background: Color.firstBrandColor, 

        borderStyle: "solid", 
        borderWidth: "1px", 
        borderColor: Color.hintColor, 
        outline: "none", 
    }
};

const Right = (props) => {
    return (
        <div style={style.wrapper}>
            
        </div>
    );
};

export default Right;