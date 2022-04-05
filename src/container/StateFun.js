import React, { useState } from "react";

export default function StateFun() {
  const [id, setId] = useState(111);
  const [name, setName] = useState("raj");
  const [city, setCity] = useState("surat");

  const change = () => {
    setId(112);
  };
  const citychange = () => {
    setCity("Ahmedabad");
  };
  return (
    <>
      <div>
        {id}
        <button onClick={() => change()}>change id</button>
      </div>
      <div>
        {name}
        <button onClick={() => setName("Abhay")}>change Name</button>
      </div>
      <div>
        {city}
        <button onClick={() => citychange()}>change Name</button>
      </div>
    </>
  );
}
