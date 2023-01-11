import React from 'react';

import CreateMemoButton from './CreateMemoButton';

import Color from '../../../utilities/color';

const style = {
    wrapper: {
        width: "300px", 
        height: `calc(100% - 63px)`, 

        position: "fixed", 
        top: "62px", 
        left: `calc(100% - 302px)`, 

        background: Color.firstBrandColor, 

        borderStyle: "solid", 
        borderWidth: "0px 1px 1px 1px", 
        borderColor: Color.hintColor, 
        outline: "none", 

        display: "flex", 
        flexDirection: "column",

        alignItems: "stretch"
    }
};

const Right = (props) => {
    const handleCreateMemoButtonClick = (event) => {
        props.setSelect(0);
    };

    return (
        <div style={style.wrapper}>
            { props.select !== 0
                && <CreateMemoButton onClick={handleCreateMemoButtonClick} text="생성" />
            }
        </div>
    );
};

export default Right;