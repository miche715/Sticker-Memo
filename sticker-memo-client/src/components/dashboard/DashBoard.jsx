import React from "react";

import Header from "./Header";

import Color from "../../utilities/color";
import Right from "./Right";

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