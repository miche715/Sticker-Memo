import { useState } from "react";

import Color from "../utilities/color";

const useInputFocus = () => {
    const [focus, setFocus] = useState(false);

    const onFocus = (event) => {
        setFocus(true);
        event.target.style.borderWidth = "3px";
        event.target.style.borderColor = Color.secondBrandColor;
    }

    const onBlur = (event) => {
        setFocus(false);
        event.target.style.borderWidth = "2px";
        event.target.style.borderColor = Color.hintColor;
    }

    return [onFocus, onBlur];
};

export default useInputFocus;