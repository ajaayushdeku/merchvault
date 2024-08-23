import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaHome } from "react-icons/fa";

const PageNavigation = ({ title }) => {
  return (
    <Wrapper>
      <hr />
      <NavLink to="/">
        {/* <FaHome />
        <br />
        Home
        <br /> */}
      </NavLink>
      {title}
    </Wrapper>
  );
};
const Wrapper = styled.section`
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 3.2rem;
  padding-left: 1.2rem;
  text-transform: uppercase;

  a {
    font-size: 3.2rem;
  }
`;
export default PageNavigation;
