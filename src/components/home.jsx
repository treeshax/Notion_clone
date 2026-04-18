import Card from "../components/Card"; // ✅ fix path
import { useNavigate } from "react-router-dom";

function Home({ pages, setPages, setCurrentPage }) {
  const navigate = useNavigate();

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  const addPage = () => {
    const newPage = {
      id: Date.now(),
      title: "Untitled",
      content: [""]
    };

    setPages([...pages, newPage]);
    setCurrentPage(newPage);

    // ✅ Redirect to dashboard
    navigate("/dashboard");
  };

  return (
    <div className="home">
      <h1>{getGreeting()}, Harshita 👋</h1>

      {/* ✅ Use Card instead of custom div */}
      <div className="card-container">
        <Card 
          title="+ New Page" 
          description="Start writing instantly"
          onClick={addPage}
        />

        <Card 
          title="Getting Started" 
          onClick={() => alert("Guide coming soon")}
        />

        <Card 
          title="Documentation" 
          onClick={() => alert("Docs coming soon")}
        />

        <Card 
          title="Community" 
          onClick={() => alert("Community coming soon")}
        />

        <Card 
          title="Support" 
          onClick={() => alert("Support coming soon")}
        />
      </div>
    </div>
  );
}

export default Home;