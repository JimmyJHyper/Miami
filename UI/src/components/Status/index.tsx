// pages/index.tsx
import React from 'react';
import StatusIndicator from './styles';
type status={
  status:boolean;
}
interface indicator {
  status:boolean;
}
const StatusIndicatorDiv: React.FC<status> = (indicator) => {
  return (
    <div>
      <StatusIndicator value={indicator.status}></StatusIndicator>
    </div>
  );
};

export default StatusIndicatorDiv;
