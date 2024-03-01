import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "primereact/button";
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
`;

function VoucherGenerator({ slug }) {
  //const numberOfOficios = 100;
  //const [elements, setElements] = useState([]);
  //let selecteds = useStore(oDNumbers);
  // const options = Array.from({ length: numberOfOficios }, (v, k) => ({
  //   name: `${k + 1}`,
  //   value: k + 1,
  // }));

  // useEffect(() => {
  //   //setElements(selecteds);
  // }, []);

  // const handleNumberClick = (value) => {
  //   addODNumbers(value);
  // }

  const handleButtonClick = () => {
    generateVoucher();
  }

  return (
    <div>
      <style>{componentStyles}</style>
      <Button
        type="button"
        label="Voucher de 24hrs"
        icon="pi pi-ticket"
        outlined
        badge="0"
        badgeClassName="p-badge-success"
        onClick={handleButtonClick}
      />
      <Button
        type="button"
        label="Voucher de 7 dias"
        icon="pi pi-ticket"
        outlined
        badge="0"
        badgeClassName="p-badge-success"
        disabled
      />
    </div>
  );
}

export default VoucherGenerator;
