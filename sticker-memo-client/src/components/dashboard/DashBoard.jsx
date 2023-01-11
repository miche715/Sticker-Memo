import React, { useEffect, useRef, useState } from "react";

import Header from "./header/Header";
import Right from "./right/Right";
import MemoCreate from "./memo/MemoCreate";
import MemoDetail from "./memo/MemoDetail";

import Color from "../../utilities/color";

const style = {
    wrapper: {
        width: "100%", 
        height: "100%", 

        background: Color.whiteColor
    }, 

    information: {
        background: Color.whiteColor, 
        width: `calc(100% - 303px)`, 
        height: `calc(100% - 63px)`, 
        position: "absolute", 
        top: "62px", 
        borderStyle: "solid", 
        borderWidth: "0px 0px 1px 1px", 
        borderColor: Color.hintColor, 

        display: "flex", 
        flexDirection: "column",

        justifyContent: "center", 
        alignItems: "center"
    }, 

    p: {
        fontWeight: "900", 
        fontSize: "2.3em", 

        color: Color.hintColor, 
    }
};

const DashBoard = (props) => {
    const [select, setSelect] = useState(null);  // 0: MemoCreate, 1~n MemoDetail
    
    const historyReference = useRef(null);

    useEffect(() => {
        if(select !== null && select !== 0)
        {
            historyReference.current = select;
        }
    }, [select])

    return (
        <div style={style.wrapper}>
            <Header />
            <Right select={select} setSelect={setSelect} />
            {select == null 
                ? <div style={style.information}><p style={style.p}>우측 메뉴에서 메모를 새로 생성하거나, 선택해 주세요.</p></div>
                : select === 0 
                    ? <MemoCreate setSelect={setSelect} /> 
                    : <MemoDetail setSelect={setSelect} />
            }
        </div>
    );
};

export default DashBoard;