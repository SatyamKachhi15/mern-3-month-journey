function ProductCard({ name, role, team, rating, image, Price }) {
  return (
    <div className="card">
      <img src={image} alt={name} />

      <h2>{name}</h2>

      <p>Role: {role}</p>

      <p>Team: {team}</p>

      <p>⭐ {rating}</p>

      <p>Price: {Price}</p>

      <button>View Profile</button>
    </div>
  );
}

export default ProductCard;