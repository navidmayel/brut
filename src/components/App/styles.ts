import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  @media (max-width: 800px) {
    flex-direction: column;
    max-height: 100vh;
    background-color: #fff;
  }
`;

export const TrackViewer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  min-width: 70vw;

  @media (max-width: 800px) {
    font-size: 4vh;
    width: 90vw;
    height: 25vh;
  }
`;
export const Side = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 30vw;
  position: sticky;
  border-left: 2px solid #000;
  background-color: #fff;

  @media (max-width: 800px) {
    font-size: 2vh;
    min-width: 95vw;
    padding: 2vw 2vw;
    border-left: 0px;
  }
`;
