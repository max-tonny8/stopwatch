import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 2rem;
  width: 100%;
  justify-content: center;
  height: calc(100vh - 84px);

  .world-clock {
    width: 80%;
    background-color: #0d0c1b;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .select-wrapper {
    width: 20%;
  }

  .clock {
    display: flex;
    width: 40%;
    font-size: 5rem;
    font-weight: 800;
    color: #b3a5a5;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 1246px) {
    .world-clock {
      width: 100%;
      flex-direction: column;
      gap: 60px;
    }

    .select-wrapper {
      width: 60%;
    }

    .clock {
      width: 100%;
    }
  }
`;

export { Container };