import styled from "styled-components";

import { Props } from ".";

export const Button = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  width: 48px;
  height: 48px;
  border-radius: 50%;

  margin-bottom: 8px;

  background-color: ${(props) => props.isHome ? 'var(--main-gray)' : 'var(--primary)'};
  
  position: relative;
  cursor: pointer;

  > img {
    object-fit: contain;
    width: 24px;
  }

  &::before {
    width: 9px;
    height: ${(props) => (props.hasNotifications ? '9px' : '0px')};

    position: absolute;
    left: -17px;
    top: calc(50% - 4.5px);

    background-color: var(--white);
    border-radius: 50%;

    content: '';
    visibility: ${(props) => (props.hasNotifications ? 'visible' : 'hidden')};
    transition: all .3s ease-in;
  }

  &::after {
    background-color: var(--notification);
    width: auto;
    height: 16px;

    padding: 0 4px;

    position: absolute;
    bottom: -4px;
    right: -4px;

    border-radius: 12px;
    border: 4px solid var(--quaternary);

    text-align: right;
    font-size: 13px;
    font-weight: bold;
    color: var(--white);

    content: '${props => props.mentions && props.mentions}';
    display: ${props => props.mentions && props.mentions > 0 ? 'inline' : 'none'};
  }

  transition: border-radius .2s, background-color .2s;

  &.active, &:hover {
    border-radius: 16px;
    background-color: var(--discord);
    &::before {
      visibility: visible;
      height: 24px;
      top: calc(50% - 12px);

      border-radius: 8px;
    }
  }
`;

export default Button;