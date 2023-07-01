import React, { useState } from "react";

function App() {
  const [fullname, fullSet] = useState({
    fname: "",
    lname: ""
  });
  function namer(event) {
    const { name, value } = event.target;

    fullSet((prev) => {
      if (name === "fName")
        return {
          fname: value,
          lname: prev.lname
        };
      else
        return {
          fname: prev.fname,
          lname: value
        };
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullname.fname} {fullname.lname}
      </h1>
      <form>
        <input onChange={namer} name="fName" placeholder="First Name" />
        <input onChange={namer} name="lName" placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
