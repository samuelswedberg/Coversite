import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const FooterSection = styled.section`
  margin-top: 1rem;
  padding: 1rem;
  background: #fff;
  //position: absolute;
  bottom: 0;
  left: 0;
  height: 100px;
  z-index: 90;
  display: flex;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  box-shadow: 0px 0px 5px 2px #ccc;
`;

export const FooterText = styled.div`
  color: #000;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-family: "Light";
  font-size: 1rem;
  text-decoration: none;
`;

export const FooterList= styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 10px 2rem;
  height: 100%;
`;

export const FooterLink = styled.a`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    margin: 10px 1rem;
    height: 100%;
    scale: 1.5;
    cursor: pointer;
    &.active {
    color: #808080;
    }
    &:hover {
        color: #808080;
    }
`;

