import { useEffect, useState } from "react";

function updateDateTimeLink() {
  const now = new Date();
  const dateTimeString = now.toLocaleString();
  return dateTimeString;
}

function DynamicFieldComponent({ odRegistered, setOdRegistered }) {
  const [items, setItems] = useState([]);

  // const addItem = () => {
  //   const newItem = { id: items.length, value: '' };
  //   setItems([...items, newItem]);
  //   onAdd();
  // };

  useEffect(() => {
    // alert("qqqqqq");
  }, []);

  return (
    <>
      {odRegistered.map((item) => (
        <div key={item.odNumber}>
          <div className="mt-1" id="linkContainer">
            <a className="btn" target="_self">
              RH
            </a>
            <input className="input-style" type="text" placeholder={``} />
            <button
              className="button-style"
              onClick={() => updateDateTimeLink()}
            >
              Salvar
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default DynamicFieldComponent;
