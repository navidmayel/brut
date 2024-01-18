import styled from "styled-components";

export const Navbar = styled.header`
  width: 100vw;
  min-height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  border-bottom: 2px solid #000;
  padding: 1em 1em 1em 1em;
  box-sizing: border-box;
`;

export const H1 = styled.h1`
  color: #000;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  margin-left: 1em;
`;

interface IProfileProps {
  profile: string;
}

export const Profile = styled.image<IProfileProps>`
  border: 2px solid #000;
  background-image: ${(props) => `url(${props.profile})`};
  width: 3em;
  height: 3em;
  background-size: cover;
  filter: grayscale(1);
`;

export const Button = styled.button`
  padding-left: 2em;
  padding-right: 2em;
  border: none;
  background-color: #000;
  color: #fff;
`;