import { useState, useRef } from "react";
import { SelectButton } from "primereact/selectbutton";
import DynamicFieldComponent from "./DynamicFieldComponent.jsx";

//import { useStore } from "@nanostores/react";
//import { addODNumbers, oDNumbers } from "../../../storeOficio";

function getCurrentDateTime() {
  let now = new Date();
  let year = now.getFullYear();
  let month = (now.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
  let day = now.getDate().toString().padStart(2, "0");
  let hours = now.getHours().toString().padStart(2, "0");
  let minutes = now.getMinutes().toString().padStart(2, "0");
  let formattedDate = `${day}/${month}/${year}`;
  let formattedTime = `${hours}:${minutes}`;
  return `${formattedDate} ${formattedTime}`;
}

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
  const preservedArray = useRef([]);
  const options = Array.from({ length: numberOfOficios }, (v, k) => ({
    name: `${k + 1}`,
    value: k + 1,
  }));

  //let selecteds = useStore(oDNumbers);

  // useEffect(() => {
  //setElements(selecteds);
  // },[]); //[selecteds]);

  // const addOdRegistered = (newObj) => {
  //   const exists = odRegistered.some(obj => obj.odNumber === newObj.odNumber);
  //   if (!exists) {
  //     setOdRegistered(current => [...current, newObj]);
  //   }
  // };

  const handleNumberClick = (values) => {
    const temp = [];
    for (let i = 0; i < values.length; i++) {
      const newObj = {
        data: getCurrentDateTime(),
        userId: null,
        odNumber: values[i],
        odSubject: "",
      };
      temp.push(newObj);
      preservedArray.current = temp;
    }
    setElements(values);
  };

  return (
    <div>
      <style>{componentStyles}</style>
      <div className="official-documents">
        <div className="divider my-0"></div>
        <DynamicFieldComponent
          client:load
          slug={slug}
          registers={preservedArray.current}
        />
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
