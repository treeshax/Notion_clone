import Card from "./card";

function Home() {
  return (
    <div className="home">
      <h1>Welcome</h1>

      <div className="card-container">
        <Card title="Getting Started" />
        <Card title="Customize UI" />
        <Card title="Projects & Tasks" />
        <Card title="AI Features" />
      </div>
    </div>
  );
}

export default Home;