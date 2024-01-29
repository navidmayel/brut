import styled, { keyframes } from "styled-components";

export const TrackDetails = styled.div`
  min-width: 68vw;
  display: flex;
  justify-content: space-between;
  margin: 0;
  backround-color: #fff;
`;

export const H1 = styled.h1`
  color: #000;
  font-weight: bold;
  font-size: 10vh;
  padding-left: 1.5em;
  max-width: 50vw;

  @media (max-width: 800px) {
    font-size: 6vh;
    width: 100vw;
  }
`;

export const slide = keyframes`
0% {
    transform: translateX(+100%);
}
100% {
    transform: translateX(-100%);

}
`;

export const TickerWrapper = styled.div`
  height: 3em;
  margin: 0;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;

  @media (max-width: 800px) {
    visibility: hidden;
  }
`;

export const TickerContent = styled.div`
  font-size: 4vh;
  display: flex;
  justify-content: space-between;
  font-style: italic;
  animation: ${slide} 10s linear infinite;
  color: #000;
`;

export const RotationAnimation = keyframes`
 from {
    transform: rotate(0deg);
 }
 to {
    transform: rotate(360deg);
 }
`;

export const Container = styled.div`
  position: absolute;
  border: 1px solid #000;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  top: 30%;
  right: 40%;
  border-radius: 50%;
  animation: ${RotationAnimation} 10s linear infinite;

  @media (max-width: 800px) {
    top: 50%;
    right: 25%;
  }
`;

export const Text = styled.span`
  position: absolute;
  top: 40%;
  right: 40%;
  transform: translate(-50%, -50%);
  font-size: 18px;
  text-transform: uppercase;
  color: #000;

  @media (max-width: 800px) {
    font-size: 8px;
  }
`;

export const Circle = styled.div`
  position: sticky;
  width: 50px;
  height: 200px;
  border-radius: 50%;
  border: 1px solid #000;

  @media (max-width: 800px) {
    width: 25px;
    height: 100px;
  }
`;
