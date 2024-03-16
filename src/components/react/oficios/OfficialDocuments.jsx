import { useEffect, useState, useRef } from "react";
import { SelectButton } from "primereact/selectbutton";
//import { useStore } from "@nanostores/react";
//import { addODNumbers, oDNumbers } from "../../../storeOficio";
import DynamicFieldComponent from './DynamicFieldComponent.jsx';

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

function updatePreservedArray(sourceArray, object, preservedArray) {
  const insertIndex = sourceArray[sourceArray.length - 1] - 1;
  for (let i = 0; i < insertIndex; i++) {
    if (preservedArray[i] === undefined) {
      preservedArray[i] = null;
    }
  }
  if (preservedArray[insertIndex] === undefined || preservedArray[insertIndex] === null) {
    preservedArray[insertIndex] = object;
  }
  return preservedArray;
}

function OfficialDocuments() {
  const numberOfOficios = 100;
  const [elements, setElements] = useState([]);
  const [odRegistered, setOdRegistered] = useState([]);
  const preservedArray = useRef([]);

  //let selecteds = useStore(oDNumbers);
  const options = Array.from({ length: numberOfOficios }, (v, k) => ({
    name: `${k + 1}`,
    value: k + 1,
  }));

  useEffect(() => { 
    //setElements(selecteds);
  },[]); //[selecteds]);

  const addOdRegistered = (newObj) => {
    const exists = odRegistered.some(obj => obj.odNumber === newObj.odNumber);
    if (!exists) {
      setOdRegistered(current => [...current, newObj]);
    }
  };

  const handleNumberClick = (value) => {
    const newObj = {data:null, userId:null, odNumber:value[value.length-1], odSubject:""}
    setElements(value);
    preservedArray.current = updatePreservedArray(value,newObj,preservedArray.current);
    console.log(preservedArray.current,value);
    //addODNumbers(value);
  }

  return (
    <div>
      <style>{componentStyles}</style>
      <div className="official-documents">
        <div className="divider my-0"></div>
        <DynamicFieldComponent client:load odRegistered={odRegistered} />
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