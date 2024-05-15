import React from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
    &.Control-Buttons {
        margin: 3rem 0;
        width: 100%;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .btn-grp {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .btn {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        width: 10vw;
        height: 5vh;
        border-radius: 14px;
        margin: 0px 6px;
        display: flex;
        border: 2px solid #e42a2a;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        color: #f5f5f5;
    }

    .btn-one {
        background-color: #e42a2a;
    }

    .hidden {
        display: none;
    }

    .block {
        display: flex;
        text-align: center;
        align-items: center;
    }
`;

export default function ControlButtons(props: { active: boolean, isPaused: boolean, handleRecord: () => void, handleStart: () => void, handleReset: () => void, handlePauseResume: () => void }) {
    const { active, isPaused, handleRecord, handleStart, handleReset, handlePauseResume } = props;

    const StartButton = (
        <div className="btn btn-one btn-start"
            onClick={handleStart}>
            Start
        </div>
    );
    const ActiveButtons = (
        <div className="btn-grp">
            <div className="btn btn-two"
                onClick={handleReset}>
                Reset
            </div>
            <div className="btn btn-one"
                onClick={handlePauseResume}>
                {isPaused ? "Resume" : "Pause"}
            </div>
            <div className={`${isPaused ? "hidden" : "btn btn-two block"}`}
                onClick={handleRecord}>
                Record
            </div>
        </div>
    );

    return (
        <Wrapper className="Control-Buttons">
            <div>{active ? ActiveButtons : StartButton}</div>
        </Wrapper>
    );
}
