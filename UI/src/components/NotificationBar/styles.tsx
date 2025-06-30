import styled from "styled-components";

export const DivNotificationBarContainer = styled.div`
  width: 80%;
  max-width: 1080px;
  margin: 1.7rem auto;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 10px;
  padding: 1rem 1.3rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  font-size: 0.93rem;
  text-align: left;

  .checkbox-icon {
    color: ${({ theme }) => theme.colors.pink};
    font-size: 1.5rem;
    min-width: 30px;
  }

  p {
    line-height: 1.5;
  }

  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
    padding: 0.3rem;
    margin-top: 0.7rem;
    gap: 1rem;
  }
`;
