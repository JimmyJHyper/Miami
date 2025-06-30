import styled from "styled-components";

export const SeperatedDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  height:70vh;
  margin-top:5rem;
`;

export const RightDiv = styled.div`
  border-left: 1px solid grey;
  flex-direction: column;
  width: 100%;
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: start;
  padding-block: 3rem;
`;
export const LeftDiv = styled.div`
  flex-direction: column;
  width: 100%;
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: start;
  padding-block: 3rem;
`;

export const ContainerDiv = styled.div`
  width: 50%;
`;

export const H2Header = styled.h2`
  font-weight: 800;
  margin-bottom: 0.6rem;
`;

export const PParagraph = styled.p`
  font-weight: bold;
  color: grey;
  margin-bottom: 1.7rem;
  font-size: 1rem;
  line-height: 1rem;
`;

export const ClickButton = styled.button`
  font-weight: 100;
  color: #dddddd;
  margin-bottom: 0.8rem;
  font-size: 1.1rem;
  background: black;
  padding-block: 0.7rem;
  padding-inline: 1.5rem;
  border-radius: 3px;
`;

export const InputGroup = styled.div`
  margin-bottom: 0.5rem;
`;

export const InputHeaderText = styled.p`
  font-weight: 800;
  color: black;
  margin-bottom: 1px;
  font-size: 0.8rem;
  line-height: 1rem;

  span {
    color: grey;
    font-size: 0.7rem;
  }
`;

export const InputField = styled.input`
  font-weight: 600;
  margin-bottom: 1px;
  font-size: 0.8rem;
  line-height: 2rem;
  width: 100%;
  box-shadow: inset 0 0 4px 1px #9b9393d9;
  padding: 2px;
  border: 1px solid grey;
`;

export const RememberMeDiv = styled.div`
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
`;
export const RememberLabel = styled.label`
  font-size: 0.7rem;
  color: black;
  font-weight: bolder;
`;

export const ForgotPasswordButton = styled.a`
  color: #009fff;
  font-weight: 600;
  font-size: 0.8rem;
  cursor: pointer;
`;

export const AgreeingText = styled.div`
  color: black;
  font-weight: 600;
  font-size: 0.8rem;
`;
export const ErrorDiv = styled.div`
  color: red;
  font-weight: 600;
  font-size: 0.8rem;
`;

export const MainDiv = styled.div`
  padding: 1rem;
  height: 99.9%;
  overflow-y: auto; 
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export const Row = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allow wrapping */
  margin: 0.6rem 0.2rem; /* Adjust margins */
  gap: 0.3rem;
  align-items: flex-start;
`;

export const Col = styled.div`
  flex: 1 1 100%; /* Full width on mobile */

  @media (min-width: 768px) {
    flex: 1 1 48%; /* Two columns on medium screens */
  }

  @media (min-width: 1200px) {
    flex: 1 1 30%; /* Three columns on larger screens */
  }
`;
