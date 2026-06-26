import { useParams } from "react-router-dom";

function BlogDetails() {
  const { id } = useParams();

  return (
    <div className="page">
      <h1>📖 Blog Details</h1>
      <p>Blog ID: {id}</p>
    </div>
  );
}

export default BlogDetails;