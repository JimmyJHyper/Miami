import styled from "styled-components";

interface LeftMenuItemProps {
  active?: boolean;
}

export const ContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  min-height: 70vh;
  margin-block: 2rem;
  margin-inline: 5rem;
  background-color: #e9e9e9;
  box-shadow: 0px 0px 2px 0px #b1b1b1;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-inline: 1rem;
    margin-block: 1rem;
  }
`;

export const LeftMenu = styled.div`
  flex: 1;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  margin-bottom: 0rem; /* Space below on mobile */

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 0; /* No margin below on mobile */
  }
`;

export const RightMenu = styled.div`
  flex: 3;
  background-color: transparent;

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem;
  }
`;

export const LeftMenuHeader = styled.div`
  width: 100%;
  background-color: #0070aa;
  color: white;
  text-align: center;
  padding-block: 1rem;
  font-weight: 700;
  font-size: 1rem;
  box-shadow: 0px 0px 2.5px 0.2px black;
  border-radius: 8px 8px 0 0; /* Rounded corners for the header */

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding-block: 0.8rem;
  }
`;

export const LeftMenuItem = styled.div<LeftMenuItemProps>`
  width: 100%;
  background-color: ${(props) => (props.active ? "#E0E0E0" : "#ffffff")};
  color: black;
  text-align: left;
  padding-block: 0.8rem;
  padding-inline: 1.5rem; /* Less padding for mobile */
  font-weight: 600;
  font-size: 1rem;
  box-shadow: 0px 0px 2.5px 0.2px black;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;

  &:hover {
    background-color: ${(props) => (props.active ? "#E0E0E0" : "#f0f0f0")};
    box-shadow: ${(props) =>
      props.active ? "0px 0px 2.5px 0.2px black" : "0px 0px 5px 0.5px gray"};
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding-block: 0.6rem; /* Reduced padding on mobile */
    padding-inline: 1rem; /* Further reduced padding for mobile */
  }
`;
