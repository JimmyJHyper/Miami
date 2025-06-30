import styled from "styled-components";
import avatar from '/public/avatar.jpeg';

export const DropdownList = styled.div`
  position: absolute;
  top: 2.9rem;
  right: -0.1rem;
  background: ${(props) => props.theme.colors.white};
  box-shadow: 0 -5px 40px rgba(50, 50, 50, 0.1);
  display: none;

  
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
  background:  url(${avatar.src}) no-repeat center/cover;
  padding: 0.7rem 1rem;
  border-radius: 25px;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 3rem;
  height: 3rem;
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
