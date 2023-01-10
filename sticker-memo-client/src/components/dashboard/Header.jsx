import React from 'react';

import Color from '../../utilities/color';

const style = {
    wrapper: {
        width: `calc(100% - 2px)`, 
        height: "60px",

        position: "fixed", 

        background: Color.firstBrandColor,

        borderStyle: "solid", 
        borderWidth: "1px", 
        borderColor: Color.hintColor, 
        outline: "none", 

        display: "flex", 
        flexDirection: "row",

        justifyContent: "flex-start",
        alignItems: "center",
    }, 

    h1: {
        marginLeft: "5px", 

        fontWeight: "600", 
        fontSize: "1.9em", 
        color: Color.whiteColor, 
    }
};

const Header = (props) => {
    return (
        <div style={style.wrapper}>
            <h1 style={style.h1}>시작은 창대하지만 끝은 미미한 메모</h1>
        </div>
    );
};

export default Header;