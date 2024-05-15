import React from "react";
import styled from "styled-components";

export const Wrapper = styled.div<{$style: string}>`
    &.timer {
        margin: ${({$style}) => $style === 'record' ? '' : '3rem 0'};
        width: 100%;
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
                {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
            </span>
            <span className="digits">
                {("0" + Math.floor((time / 1000) % 60)).slice(-2)}.
            </span>
            <span className="digits mili-sec">
                {("0" + ((time / 10) % 100)).slice(-2)}
            </span>
        </Wrapper>
    );
}

export default Timer;