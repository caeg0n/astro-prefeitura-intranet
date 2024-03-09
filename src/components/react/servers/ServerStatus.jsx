import React, { useState, useEffect } from 'react';

const StatusIndicator = ({ status }) => {
  const statusClass = status.includes('up') ? 'light-up' : 'light-down';
  return <div className={`status-light ${statusClass}`} />;
};

const ComputerStatus = ({ data }) => {
  const entries = Object.entries(data);
  return entries.map(([name, status], index) => (
    <div key={index} className="computer-status">
      <span>{name.replace(/\.campinapolis\.net/, '').replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
      <StatusIndicator status={status} />
    </div>
  ));
};

function StatusComponent ({ websocketUrl }) {
  const [computersStatus, setComputersStatus] = useState({});

  useEffect(() => {
    const ws = new WebSocket(websocketUrl);

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setComputersStatus(data);
    };

    // Ensure WebSocket is closed when component is unmounted
    return () => ws.close();
  }, [websocketUrl]);

  return (
    <div>
      <ComputerStatus data={computersStatus} />
    </div>
  );
};

export default StatusComponent;
