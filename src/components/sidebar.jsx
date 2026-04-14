function Sidebar({ pages, setPages, setCurrentPage }) {

  const addPage = () => {
    const newPage = {
      id: Date.now(),
      title: "Untitled",
      content: ""
    };

    setPages([...pages, newPage]);
  };

  return (
    <div className="sidebar">
      <h2>Workspace</h2>

      <button onClick={addPage}>+ New Page</button>

      {pages.map((page) => (
        <div 
          key={page.id}
          className="page-item"
          onClick={() => setCurrentPage(page)}
        >
          {page.title}
        </div>
      ))}
    </div>
  );
}

export default Sidebar;