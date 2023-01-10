import { useState } from "react";

import Color from "../utilities/color";

const useButtonHover = () => {
    const [hover, setHover] = useState(false);

    const onMouseEnter = (event) => {
        setHover(true);
        event.target.style.background = Color.secondBrandColor;
    }

    const onMouseLeave = (event) => {
        setHover(false);
        event.target.style.background = Color.firstBrandColor;
    }

    return [onMouseEnter, onMouseLeave];
};

export default useButtonHover;