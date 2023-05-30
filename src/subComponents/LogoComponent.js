import React from "react";
import styled from "styled-components";
import { DarkTheme } from "../components/Themes";

const Logo = styled.h1`
  display: inline-block;
  color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};
  font-family: "Pacifico", cursive;
  cursor: pointer;

  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;
`;

const LogoComponent = (props) => {
  return (
    <Logo
      onClick={() => window.open("https://rxresu.me/r/YXuPsXoP", "_blank")}
      color={props.theme}
    >
      AS
    </Logo>
  );
};

export default LogoComponent;
