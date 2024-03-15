import React, { useEffect, useState } from 'react';
import { faWifi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "@fortawesome/fontawesome-svg-core/styles.css";

const WebSocketIndicator = () => {
  const [connection, setConnection] = useState(null);
  const [rxRate, setRxRate] = useState(null);

  useEffect(() => {
    const ws = new WebSocket('ws://192.168.1.15:8765');
    ws.onopen = () => {
      console.log('WebSocket connection established');
    };
    ws.onmessage = (message) => {
      const match = message.data.match(/RX Rate: (\d+\.\d+)/);
      if (match) {
        setRxRate(parseFloat(match[1]));
      }
    };
    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };
    ws.onclose = () => {
      console.log('WebSocket connection closed');
    };
    setConnection(ws);

    return () => {
      ws.close();
    };
  }, []);

  const getIconColor = () => {
    if (rxRate >= 0 && rxRate < 100) return 'green';
    if (rxRate >= 101 && rxRate < 190) return 'orange';
    if (rxRate >= 191 && rxRate <= 400) return 'red';
    return 'grey';
  };

  const Legend = () => (
    <div style={{ display: 'flex', marginTop: '10px' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginRight: '15px' }}>
        <FontAwesomeIcon icon={faWifi} color="green" />
        <span style={{ marginLeft: '5px' }}>Rapida</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginRight: '15px' }}>
        <FontAwesomeIcon icon={faWifi} color="orange" />
        <span style={{ marginLeft: '5px' }}>Normal</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <FontAwesomeIcon icon={faWifi} color="red" />
        <span style={{ marginLeft: '5px' }}>Lenta</span>
      </div>
    </div>
  );

  return (
    <div>
      <p>CONSUMO DA INTERNET: {rxRate ? `${rxRate} Mbps` : 'N/A'} <FontAwesomeIcon icon={faWifi} color={getIconColor()} size="2x" />
      </p>
      <Legend />
    </div>
  );
};

export default WebSocketIndicator;
