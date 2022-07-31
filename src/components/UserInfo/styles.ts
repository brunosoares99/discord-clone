import styled from "styled-components";
import { Mic, Headset, Settings } from 'styled-icons/material'

export const Container = styled.div`
  grid-area: UI;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px;
  background-color: var(--quaternary);
  box-shadow: rgba(0,0,0,0.2) 0px 1px 0px 0px;
`;

export const Profile = styled.div`
  display: flex;
  cursor :pointer;
  align-items: center;
`
export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;

  background-color: var(--gray);
`
export const UserData = styled.div`
  cursor: pointer;

  margin-left: 8px;
  position: relative;
  display: flex;
  flex-direction: column;

  > strong {
    color: var(--white);
    font-size: 13px;
    font-size: 13px;
    display: block;
  }

  >span {
    color: var(--gray);
    font-size: 13px;
  }
`

export const EasterEgg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  font-size: 12px;
  padding: 5px 10px;
  height: 30px;
  background-color: red;
  position: absolute;
  top: -25px;
  left: 35px;
  transform: translate(-50%,-50%);
  font-weight: bold;
  background-color: var(--easter-egg);
  color: var(--white);
  border-radius: 8px;
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 2px 0px;
  z-index: 5;
  &.isLast {
    background-color: red;
    @keyframes example {
      0%   {transform: translate(-5px,5px)}
      25%  {transform: translate(5px,-5px)}
      50%  {transform: translate(0px,0px)}
      75%  {transform: translate(-5px,-5px)}
      100%  {transform: translate(5px,5px)}
    }
    >p {
      animation-name: example;
      animation-duration: .3s;
      animation-iteration-count: infinite;
      
    }
    >.square {
      background-color: red;
    }
  }
  > .square {
    width: 10px;
    height: 10px;
    position: absolute;
    bottom: -5px;
    left: calc(50% - 5px);
    transform: rotate(45deg);
    background-color: var(--easter-egg);
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;

  >svg:not(:first-child) {
    margin-left: 7px;
  }

`
export const MicIcon = styled(Mic)`
  width: 20px;
  height: 20px;

  color: var(--white);
  opacity: .7;
  cursor: pointer;
  transition: opacity .2s;

  &:hover {
    opacity: 1;
  }
`;
export const HeadphoneIcon = styled(Headset)`
  width: 20px;
  height: 20px;

  color: var(--white);
  opacity: .7;
  cursor: pointer;
  transition: opacity .2s;

  &:hover {
    opacity: 1;
  }
`;
export const SettingsIcon = styled(Settings)`
  width: 20px;
  height: 20px;

  color: var(--white);
  opacity: .7;
  cursor: pointer;
  transition: opacity .2s;

  &:hover {
    opacity: 1;
  }
`;