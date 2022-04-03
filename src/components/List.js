import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "./context/Data";

const List = () => {
  const navigate = useNavigate();
  const [data, setData] = useContext(DataContext);
  const handleDelete = (e) => {
    const id = +e.target.value;
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  };
  const handleClick = () => {
    navigate("/add");
  };

  return (
    <div>
      <div>
        <button onClick={handleClick}>Add New Data</button>
      </div>
      {data.map((value) => {
        return (
          <>
            <div className="container">
              <div>
                <h1>{value.id}</h1>
                <h3>{value.name}</h3>
              </div>
              <button onClick={handleDelete} value={value.id}>
                Delete
              </button>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default List;
