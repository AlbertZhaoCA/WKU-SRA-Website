import React from "react";

export function htmlToRF(htmlNode:React.JSX.Element):React.FC {
     const ReactFC = () => htmlNode;
     return ReactFC;
};

export function htmlsToRF(htmlNodes: React.JSX.Element[]): React.FC[] {
    return htmlNodes.map((htmlNode, index) => {
        const ReactFC = () => <React.Fragment key={index}>{htmlNode}</React.Fragment>;
        return ReactFC;
    });
}
