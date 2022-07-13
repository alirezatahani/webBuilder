import styled, { css, keyframes } from "styled-components";
import { SpinTypes } from "../content/spin_types";
import { sizes } from "../utils/constants";

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

export const Loader = styled.div<SpinTypes>(({color, borderTopColor, width, duration, size}) => css`
margin: 5px;
border: ${width}px solid ${color};
border-top: ${width}px solid ${borderTopColor};
border-radius: 50%;
animation: ${spin} ${duration}s linear infinite;
${sizes[size]};
`)


