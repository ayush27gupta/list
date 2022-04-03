import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [data, setData] = useState([
    { id: 1, name: "Ayush" },
    { id: 2, name: "Ayushi" },
    { id: 3, name: "Pooja" },
    { id: 4, name: "Pooji" },
  ]);

  return (
    <DataContext.Provider value={[data, setData]}>
      {props.children}
    </DataContext.Provider>
  );
};
