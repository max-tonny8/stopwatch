import React from "react";
import styled from "styled-components";

export const Wrapper = styled.div<{$style: string}>`
    &.timer {
        margin: ${({$style}) => $style === 'record' ? '' : '3rem 0'};
        display: flex;
        height: 12%;
        justify-content: center;
        align-items: center;
    }
    
    .digits {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: ${({$style}) => $style === 'record' ? '24px' : '4rem'};
        color: #a89494;
    }
    
    .mili-sec {
        color: #e42a2a;
    }
`;

const Timer = ({ time, type }: { time: number, type?: string }) => {

    return (
        <Wrapper className="timer" $style={type!}>
            <span className="digits">
                {type == "world" ? ("0" + ((time / 3600000) % 24)).slice(-2) : ("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
            </span>
            <span className="digits">
                {type == "world" ? ("0" + ((time / 60000) % 60)).slice(-2) : ("0" + Math.floor((time / 1000) % 60)).slice(-2)}{type == "world" ? ":" : "."}
            </span>
            <span className="digits mili-sec">
                {type == "world" ? ("0" + ((time / 1000) % 60)).slice(-2) : ("0" + ((time / 10) % 100)).slice(-2)}
            </span>
        </Wrapper>
    );
}

export default Timer;