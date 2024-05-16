import styled from "styled-components";

const Content = styled.div`
  display: flex;
  padding: 2rem;
  width: 100%;
  height: calc(100vh - 84px);

  @media (max-width: 1246px) {
    flex-direction: column;
  }
`;

const Wrapper = styled.div`
  &.stop-watch {
    width: 60%;
    background-color: #0d0c1b;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  @media (max-width: 1246px) {
    &.stop-watch {
      width: 100%;
    }
  }
`;

const RecordList = styled.div`
  font-size: 24px;
  font-weight: 500;
  font-family: Arial, Helvetica, sans-serif;
  color: #233849;
  padding: 2rem;
  border: solid 2px #000000;
  width: 40%;
  overflow-y: scroll;
  @media (max-width: 1246px) {
      width: 100%;
      height: 100vh;
  }
`;

const RecordTitle = styled.p`
  font-size: 48px;
  font-weight: 700;
  font-family: Arial, Helvetica, sans-serif;
  color: #7a1212;
  text-align: center;
  padding: 1rem;
  
  @media (max-width: 1246px) {
    font-size: 32px;
  }
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

  @media (max-width: 1246px) {
    font-size: 16px;
  }
  `;

const RecordContent = styled.p`
  font-size: 24px;
  font-weight: 400;
  font-family: Arial, Helvetica, sans-serif;
  color: #000;
  width: 70%;
  
  @media (max-width: 1246px) {
    font-size: 16px;
  }
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