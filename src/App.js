import logo from "./logo.svg";
import "./App.css";
import { DataProvider } from "./components/context/Data";
import List from "./components/List";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddData from "./components/AddData";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<List />} />
            <Route path="/add" element={<AddData />} />
          </Routes>
        </BrowserRouter>
      </div>
    </DataProvider>
  );
}

export default App;
