import { useEffect, useState } from "react";
import { SelectButton } from "primereact/selectbutton";
import { useStore } from "@nanostores/react";
import { addODNumbers, oDNumbers } from "../../../storeOficio";

const componentStyles = `
.official-documents .p-button {
  display: inline-flex;
}
.p-buttonset .p-button:first-of-type {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.p-buttonset .p-button:not(:last-child) {
  border-right: 0;
}
`;

function OfficialDocuments({ slug }) {
  const numberOfOficios = 100;
  const [elements, setElements] = useState([]);
  let selecteds = useStore(oDNumbers);
  const options = Array.from({ length: numberOfOficios }, (v, k) => ({
    name: `${k + 1}`,
    value: k + 1,
  }));

  useEffect(() => { 
    setElements(selecteds);
  }, [selecteds]);

  const handleNumberClick = (value) => {
    addODNumbers(value);
  }

  return (
    <div>
      <style>{componentStyles}</style>
      <div className="official-documents">
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
      </div>
    </div>
  );
}

export default OfficialDocuments;
