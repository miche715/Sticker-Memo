import React from "react";

import Header from "./header/Header";
import Right from "./right/Right";

import Color from "../../utilities/color";

const style = {
    wrapper: {
        width: "100%", 
        height: "100%", 

        background: Color.whiteColor
    }
};

const DashBoard = (props) => {
  return (
        <div style={style.wrapper}>
            <Header />
            <Right />
        </div>
    );
};

export default DashBoard;