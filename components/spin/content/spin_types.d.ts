import React from "react";

export type SpinTypes = {
    color?: RGB | RGBA | HEX;
    borderTopColor?: RGB | RGBA | HEX;
    animation?: string;
    width?: number;
    duration?: number;
    size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    style?: React.CSSProperties;
}