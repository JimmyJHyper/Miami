// components/StatusIndicator.tsx
import styled, { keyframes } from 'styled-components';

interface StatusIndicatorProps {
  value: boolean;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const StatusIndicator = styled.div<StatusIndicatorProps>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: white;
  background-color: ${({ value }) => (value ? '#2ECC71' : '#E74C3C')};
  filter: blur(2px); /* Add a blur effect */
  animation: ${fadeIn} 0.5s ease-in-out; /* Add a fade-in animation */
`;

export default StatusIndicator;
