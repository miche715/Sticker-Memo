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
    const [selectMemo, setSelectMemo] = useState();

    const historyReference = useRef(null);

    useEffect(() => {
        if(select !== null && select !== 0)
        {
            historyReference.current = select;
        }
    }, [select]);

    return (
        <div style={style.wrapper}>
            <Header />
            <Right select={select} setSelect={setSelect} setSelectMemo={setSelectMemo} />
            {select == null 
                ? <div style={style.information}><p style={style.p}>우측 메뉴에서 메모를 새로 생성하거나, 선택해 주세요.</p></div>
                : select === 0 
                    ? <MemoCreate setSelect={setSelect} /> 
                    : <MemoDetail setSelect={setSelect} memo={selectMemo}/>
            }
        </div>
    );
};

export default DashBoard;

// {
//     "isSuccess": true,
//     "message": "메모 목록 불러왔습니다.",
//     "data": [
//         {
//             "title": "111",
//             "text": "111",
//             "latitudes": [],
//             "longitudes": []
//         },
//         {
//             "title": "222",
//             "text": "222",
//             "latitudes": [
//                 37.4362776,
//                 36.6690908,
//                 36.6250177,
//                 35.9386666
//             ],
//             "longitudes": [
//                 126.8709106,
//                 126.8434448,
//                 127.9420776,
//                 127.953064
//             ]
//         }
//     ]
// }