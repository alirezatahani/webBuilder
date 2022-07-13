import React from "react";
import { Loader } from "../styles/spin.style";
import { SpinTypes } from "./spin_types";

const Spin: React.FC<SpinTypes> = ({...props}: SpinTypes) => {
    return(
        <Loader {...props}/>
    )
}

Spin.defaultProps = {
    color: "rgba(0, 0, 250, 0.2)",
    borderTopColor: "rgb(0, 0, 250)",
    duration: 0.6,
    width: 3,
}

export default Spin;