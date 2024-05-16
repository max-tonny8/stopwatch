import styled from "styled-components";

const Content = styled.div`
  display: flex;
  padding: 2rem;
  width: 100%;
  height: calc(100vh - 84px);
`;

const Wrapper = styled.div`
  &.stop-watch {
    width: 50%;
    background-color: #0d0c1b;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
`;

const RecordList = styled.div`
  font-size: 24px;
  font-weight: 500;
  font-family: Arial, Helvetica, sans-serif;
  color: #233849;
  padding: 2rem;
  border: solid 2px #000000;
  width: 50%;
  overflow-y: scroll;
`;

const RecordTitle = styled.p`
  font-size: 48px;
  font-weight: 700;
  font-family: Arial, Helvetica, sans-serif;
  color: #7a1212;
  text-align: center;
  padding: 1rem;
`;

const Record = styled.div`
  display: flex;
  flex-direction: column;
`;

const RecordWrapper = styled.div`
  padding: 1rem;
  border-bottom: solid 1px #000;
  display: flex;
  text-align: center;
  align-items: center;
`;

const RecordNo = styled.p`
  font-size: 24px;
  font-weight: 400;
  font-family: Arial, Helvetica, sans-serif;
  color: #000;
  width: 30%;
  `;

const RecordContent = styled.p`
  font-size: 24px;
  font-weight: 400;
  font-family: Arial, Helvetica, sans-serif;
  color: #000;
  width: 70%;
`;

export {
  Content,
  Wrapper,
  RecordList,
  RecordTitle,
  Record,
  RecordWrapper,
  RecordNo,
  RecordContent
}