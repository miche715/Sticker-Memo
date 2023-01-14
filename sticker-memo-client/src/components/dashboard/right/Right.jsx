import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import CreateMemoButton from './CreateMemoButton';
import MemoItem from './MemoItem';

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
    const [memos, setMemos] = useState([]);

    useEffect(() => {
        fetch("/api/memos/list")
        .then((response) => {
            return response.json();
        })
        .then((responseBody) => {
            setMemos(responseBody.data);
        })
    }, []);

    const handleMemoItemClick = (event, memo) => {
        props.setSelect(event.target.id)
        props.setSelectMemo(memo);
    };

    const handleCreateMemoButtonClick = (event) => {
        props.setSelect(0);
    };

    return (
        <div style={style.wrapper}>
            { props.select !== 0
                && <CreateMemoButton onClick={handleCreateMemoButtonClick} text="생성" />
            }
            { memos.map((memo, index) => (
                <MemoItem key={index} memo={memo} handleMemoItemClick={handleMemoItemClick}/>
            ))}
        </div>
    );
};

export default Right;