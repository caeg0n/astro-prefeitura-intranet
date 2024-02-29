import { useEffect, useState } from "react";
import { SelectButton } from "primereact/selectbutton";
import { Button } from 'primereact/button';
//import { useStore } from "@nanostores/react";
//import { addODNumbers, oDNumbers } from "../../../storeOficio";

// const componentStyles = `
// .official-documents .p-button {
//   display: inline-flex;
// }
// .p-buttonset .p-button:first-of-type {
//   border-top-right-radius: 0;
//   border-bottom-right-radius: 0;
// }
// .p-buttonset .p-button:not(:last-child) {
//   border-right: 0;
// }
// `;

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

  return (
    <div>
      <Button type="button" label="Emails" badge="8" />
      <Button type="button" label="Messages" icon="pi pi-users" outlined badge="2" badgeClassName="p-badge-danger" />
      {/* <style>{componentStyles}</style> */}
      {/* <div className="official-documents">
        <div className="divider my-0"></div>
        <div className="card">
          <b>
            <h4>Número de oficios</h4>
          </b>
          <SelectButton
            value={elements}
            options={options}
            onChange={(e) => handleNumberClick(e.value)}
            optionLabel="name"
            multiple
          />
        </div>
      </div> */}
    </div>
  );
}

export default VoucherGenerator;