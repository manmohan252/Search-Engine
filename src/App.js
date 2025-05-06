import React, { useState, useEffect } from "react";
import './style.css';
import data from "./TemplateData.json";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  const filteredData = data.filter((val) => {
    if (searchTerm === "") return true;
    return val.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <>
      <div className="topBar">
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      <div className="templateContainer">
        <div className="searchInput_Container">
          <input
            id="searchInput"
            type="text"
            placeholder="Search here..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>

        <div className="template_Container">
          {filteredData.length > 0 ? (
            filteredData.map((val) => (
              <div className="template" key={val.id}>
                <img src={val.image} alt="" />
                <h3>{val.title}</h3>
                <p>{val.description}</p>
              </div>
            ))
          ) : (
            <p className="notFoundText">No topics found</p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
