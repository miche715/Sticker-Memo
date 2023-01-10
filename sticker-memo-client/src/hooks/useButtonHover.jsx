import { useState } from "react";

const useButtonHover = (enterColor, leaveColor) => {
    const [hover, setHover] = useState(false);

    const onMouseEnter = (event) => {
        setHover(true);
        event.target.style.background = enterColor;
    }

    const onMouseLeave = (event) => {
        setHover(false);
        event.target.style.background = leaveColor;
    }

    return [onMouseEnter, onMouseLeave];
};

export default useButtonHover;