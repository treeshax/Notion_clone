function Card({ title, description, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <h3 className="card-title">{title}</h3>
      <p className="card-desc">{description || "Click to explore"}</p>
    </div>
  );
}

export default Card;