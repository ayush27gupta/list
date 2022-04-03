import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "./context/Data";

const AddData = () => {
  const navigate = useNavigate();
  const [data, setData] = useContext(DataContext);
  const [dd, setDd] = useState({ id: "", name: "" });
  const handleChange = (e) => {
    setDd({ [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    const tempdata = [...data];

    tempdata.push({ id: Date.now(), name: dd.name });
    setData(tempdata);
    navigate("/");
  };
  return (
    <div className="container">
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          value={dd.name}
        />
      </form>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default AddData;
