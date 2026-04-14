import { useState } from "react";
import Sidebar from "./components/sidebar";
import Home from "./components/home";
import Editor from "./components/editor";
import "./App.css";

function App() {
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(null);

  return (
    <div className="app">
      <Sidebar 
        pages={pages} 
        setPages={setPages} 
        setCurrentPage={setCurrentPage}
      />

      <div className="main">
        {currentPage ? (
          <Editor page={currentPage} />
        ) : (
          <Home />
        )}
      </div>
    </div>
  );
}

export default App;