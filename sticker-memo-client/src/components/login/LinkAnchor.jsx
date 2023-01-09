import React from 'react';
import { Link } from 'react-router-dom';

import Color from '../../utilities/color';

const style = {
    anchor: {
        width: "max-content", 

        marginLeft: "3vh",
        marginRight: "3vh", 
        marginBottom: "2vh", 

        fontWeight: "400", 
        fontSize: "0.8em", 
        color: Color.hintColor
    }
};

const LinkAnchor = (props) => {
    return (
        <Link to={props.link} style={style.anchor}>
            <a href=''>{props.text}</a>
        </Link>
    );
};

export default LinkAnchor;