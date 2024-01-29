import styled from "styled-components";
import Hero from "../../assets/brutLogin.jpg";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  min-height: 84vh;
  background: #fff;
  background-image: url(${Hero});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
`;

export const Right = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: right;
`;

export const Left = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const P = styled.p`
  color: #fff;
  margin-top: 1em;
  margin-bottom: 2em;
  margin-left: 1em;
  margin-right: 1em;
`;
