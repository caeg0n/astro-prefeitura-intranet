import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "primereact/button";
import { ProgressSpinner } from 'primereact/progressspinner';
//import { useStore } from "@nanostores/react";
//import { addODNumbers, oDNumbers } from "../../../storeOficio";

const componentStyles = `
.p-button.p-button-outlined {
  background-color: transparent;
  color: #06b6d4;
  border: 1px solid;
}
.p-button {
  color: #ffffff;
  background: #06b6d4;
  border: 1px solid #06b6d4;
  padding: 0.75rem 1.25rem;
  font-size: 1rem;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
  border-radius: 6px;
}
.voucher-display {
  font-size: 2rem; /* Large font size */
  color: #06b6d4; /* Same color theme as the button */
  margin-top: 20px; /* Space between the button and the text */
  font-weight: bold; /* Make the font bold */
}
.spinner-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
`;

function VoucherGenerator() {
  const [voucher, setVoucher] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = () => {
    setIsLoading(true); 
    axios.defaults.baseURL = 'http://192.168.1.15:3000/http://192.168.1.15:65527';
    axios
      .get()
      .then((response) => {
        setVoucher(response.data.code);
        setIsLoading(false);
      })
      .catch(() => {
        setVoucher("aconteceu um erro");
        setIsLoading(false);
      });
  };

  useEffect(() => {});

  return (
    <div>
      <style>{componentStyles}</style>
      <Button
        type="button"
        label="Voucher de 7 dias"
        icon="pi pi-ticket"
        outlined
        onClick={handleButtonClick}
      />
      {isLoading ? (
        <div className="spinner-container">
          <ProgressSpinner style={{width: '50px', height: '50px'}} strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s" />
        </div>
      ) : (
        voucher && <div className="voucher-display">Voucher: {voucher}</div>
      )}
    </div>
  );
}

export default VoucherGenerator;
