import styled from "styled-components";

export const DropdownList = styled.div`
  position: absolute;
  top: 2.5rem;
  right: 1rem;
  background: ${(props) => props.theme.colors.white};
  box-shadow: 0 -5px 40px rgba(50, 50, 50, 0.1);
  width: 100%;
  display: none;

  &::after {
    content: "";
    display: block;
    position: absolute;
    left: 20px;
    top: -20px;
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
    z-index: 1;
    border-bottom: 10px #fff solid;
  }
`;

export const DropdownItem = styled.div`
  cursor: pointer;
  color: ${(props) => props.theme.colors.button};
  padding: 0.7rem 1rem;
  transition: all 0.3s ease-out;
  font-weight: 300;
  font-size: 0.9rem;
  &:hover {
    background: ${(props) => props.theme.colors.button};
    color: ${(props) => props.theme.colors.white};
  }
`;

export const DropDownBtn = styled.div`
  background: ${(props) => props.theme.colors.button};
  padding: 0.7rem 1rem;
  border-radius: 25px;
  color: white;
  cursor: text;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const DivNavDropdownContainer = styled.div`
  position: relative;

  &:hover {
    ${DropdownList} {
      visibility: visible;
      display: block;
    }
  }
`;
