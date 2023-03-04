import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #fff;
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  padding-top: 0;
  padding-bottom: 0;
  z-index: 99;
  box-shadow: 0px 0px 5px 2px #ccc;
`;
  
export const NavLogo = styled(Link)`
  color: #000;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 40%;
  padding-left: 2px;
  padding-right: 2px;
  margin-left: 25px;
  margin-top: 25px;
  font-weight: bold;
  font-family: "Medium";
  font-size: 1.5rem;
  text-decoration: none;
  background-image: linear-gradient(#000, #000);
  background-size: 0% 0.1em;
  background-position-y: 100%;
  background-position-x: 0%;
  background-repeat: no-repeat;
  transition: background-size 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
      background-size: 100% 0.1em;
  }
`;

export const NavLink = styled.div`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 40%;
  padding-left: 2px;
  padding-right: 2px;
  margin-left: 25px;
  cursor: pointer;
  font-family: "Medium";
  background-image: linear-gradient(#000, #000);
  background-size: 0% 0.1em;
  background-position-y: 100%;
  background-position-x: 0%;
  background-repeat: no-repeat;
  transition: background-size 0.2s ease-in-out;
  &:hover {
      background-size: 100% 0.1em;
  }
`;
  
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 1068px) {
    display: none;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #000;
  @media screen and (max-width: 1068px) {
    display: block;
    position: absolute;
    right: 0;
    transform: translate(-100%, 90%);
    font-size: 1.8rem;
    cursor: pointer;
    z-index: 101;
  }
`;

export const NavMenuMobile = styled.div`
  display: none;
  @media screen and (max-width: 1068px) {
    background: #fff;
    height: 100%;
    display: block;
    justify-content: space-between;
    z-index: 99;
    position: absolute;
    width: 100%;
    left: 0%;
  }
`;

export const NavLinkMobile = styled.div`
  display: none;
  @media screen and (max-width: 1068px) {
    top: 25%;
    color: #000;
    text-decoration: none;
    display: block;
    padding: 10px 1rem;
    height: auto;
    width: auto;
    margin: 10px auto;
    font-family: "Medium";
    position: relative;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    z-index: 99;
    background-image: linear-gradient(#000, #000);
    background-size: 0% 0.1em;
    background-position-y: 100%;
    background-position-x: 0%;
    background-repeat: no-repeat;
    transition: background-size 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
      background-size: 100% 0.1em;
    }
  }
`;