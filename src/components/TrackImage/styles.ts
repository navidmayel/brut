import styled from "styled-components";

export const Box = styled.div`
  width: 90%;
  background: #000;
  min-height: 40vh;
  margin-bottom: 2vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    visibility: hidden;
  }
`;

interface IImageProps {
  image: string;
}

export const Image = styled.div<IImageProps>`
  height: 70%;
  width: 90%;
  filter: grayscale(1);
  background: ${(props) => `url(${props.image})`};
  background-size: cover;
  background-position: center;

  @media (max-width: 800px) {
    visibility: hidden;
  }
`;
