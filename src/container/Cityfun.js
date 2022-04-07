import React, { useState } from "react";

export default function Cityfun(props) {
  console.log(props.place);
  const [city, setCity] = useState("surat");

  return (
    <>
      <div>
        {city}
        <button onClick={() => setCity("ahmedabad")}>change city</button>
      </div>
    </>
  );
}
