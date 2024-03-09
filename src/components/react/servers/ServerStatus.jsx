import { useState, useEffect } from 'react';

const StatusIndicator = ({ status }) => {
  const statusClass = status.includes('up') ? 'light-up' : 'light-down';
  return <div className={`status-light ${statusClass}`} />;
};

const ComputerStatus = ({ data }) => {
  const entries = Object.entries(data);
  return entries.map(([name, status], index) => (
    <div key={index} className="computer-status">
      {/* <span>{name.replace(/\.campinapolis\.net/, '').replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</span> */}
      <span>{name.toUpperCase()}</span>
      <StatusIndicator status={status} />
    </div>
  ));
};

function StatusComponent ({ websocketUrl }) {
  const [isLoading, setIsLoading] = useState(true);
  const [computersStatus, setComputersStatus] = useState({});

  useEffect(() => {
    const ws = new WebSocket(websocketUrl);
    ws.onmessage = (event) => {
      try{
        const data = JSON.parse(event.data);
        if(isLoading) setIsLoading(false);
        setComputersStatus(data);
      }catch{}
    };
    return () => ws.close();
  }, [websocketUrl]);

  if (isLoading) {
    return <div className="spinner" />;
  }

  return (
    <div>
      <ComputerStatus data={computersStatus} />
    </div>
  );
};

export default StatusComponent;
