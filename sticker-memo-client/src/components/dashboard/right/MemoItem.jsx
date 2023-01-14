import React from 'react';

import useButtonHover from "../../../hooks/useButtonHover";

import Color from '../../../utilities/color';

const style = {
    wrapper: {
        margin: "5px", 

        paddingLeft: "3px", 

        background: Color.hintColor
    }
}

const MemoItem = (props) => {
    const [onMouseEnter, onMouseLeave] = useButtonHover(Color.secondBrandColor, Color.hintColor);

    return (
        <div key={props.index}
            onClick={(event) => {props.handleMemoItemClick(event, props.memo)}} 
            onMouseEnter={(event) => {onMouseEnter(event)}} onMouseLeave={(event) => {onMouseLeave(event)}} 
            style={style.wrapper}>
                {props.memo.title}
        </div>
        
    );
};

export default MemoItem;