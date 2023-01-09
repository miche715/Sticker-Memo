import React from 'react';

import Color from '../../utilities/color';

const style = {
    anchor: {
        display: "inline-block",

        width: "max-content", 

        marginLeft: "3vh",
        marginRight: "3vh", 
        marginBottom: "1vh", 

        fontWeight: "400", 
        fontSize: "0.8em", 
        color: Color.hintColor
    }
};

const LinkAnchor = (props) => {
    return (
        <a href='' style={style.anchor}>{props.text}</a>
    );
};

export default LinkAnchor;