import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

export const TrackViewer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  min-width: 70vw;
`;
export const Side = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 30vw;
  position: sticky;
  border-left: 2px solid #000;
  background-color: #fff;
`;
