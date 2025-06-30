import Image from "next/image";
import styled from "styled-components";

export const DivFooterContainer = styled.div`
  background: ${({ theme }) => theme.colors.background3};
  color: ${({ theme }) => theme.colors.gray2};
  padding: 3rem 0;
`;

export const DivReferenceWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  max-width: 1080px;
  width: 80%;
  margin: auto;
  padding: 2rem 0;

  @media screen and (max-width: 980px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 1.5rem;
  }
`;

export const DivReferenceItem = styled.div<{ center?: boolean }>`
  display: ${({ center }) => (center ? "flex" : "block")};
  align-items: center;

  @media screen and (max-width: 768px) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    padding-bottom: 1.5rem;
    margin-bottom: 0.5rem;

    &:last-child {
      border: none;
    }
  }
`;

export const ImgLogo = styled(Image)`
  max-width: 150px;
  margin: auto 0;
`;

export const H4Title = styled.h4`
  font-weight: 700;
  font-size: 1.1rem;
  font-family: ${({ theme }) => theme.fonts.title};
  margin-bottom: 1.5rem;
`;

export const LinkItem = styled.span`
  font-weight: 300;
  cursor: pointer;
  transition: all 0.3s ease-out;
  margin-bottom: 1rem;
  display: flex;
  align-items: end;
  gap: 1rem;
  color: ${({ theme }) => theme.colors.gray2};

  .item-icon {
    font-size: 1.5rem;
    transition: all 0.3s ease-out;
  }

  span {
    color: ${({ theme }) => theme.colors.gray2};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.button};
    .item-icon {
      fill: ${({ theme }) => theme.colors.button};
    }
  }
`;

export const ContactItem = styled.h4`
  font-weight: 300;
  cursor: pointer;
  transition: all 0.3s ease-out;
  display: flex;
  align-items: end;
  gap: 1rem;
  line-height: 1;
  color: ${({ theme }) => theme.colors.gray2};
`;


export const IconWrapper = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.gray2};
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 2.5rem;
  margin-top: 0.5rem;

  .item-icon {
    color: ${({ theme }) => theme.colors.gray2};
  }
`;

export const DivMapWrapper = styled.div`
  max-width: 1080px;
  width: 80%;
  height: 250px;
  margin: auto;
  border: 1px solid ${({ theme }) => theme.colors.border};
  margin-bottom: 0.5rem;
`;

export const PDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray3};
  margin-bottom: 1rem;
  font-weight: 300;
  line-height: 1.5;
`;

export const DivDescription = styled.div`
  color: ${({ theme }) => theme.colors.gray3};
  margin-bottom: 1rem;
  font-weight: 300;
  line-height: 1.5;
`


export const DivFinalWrapper = styled.div`
  text-align: center;
  max-width: 1080px;
  width: 80%;
  margin: auto;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding-top: 2rem;
`;

export const PLink = styled.p`
  font-weight: 300;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.button};
  text-transform: uppercase;

  a {
    color: ${({ theme }) => theme.colors.button};
  }
`;

export const DivFutureLinks = styled.div`
  margin-top: 1rem;
  line-height: 1.7;
  a {
    color: ${({ theme }) => theme.colors.gray3};
  }
`;
