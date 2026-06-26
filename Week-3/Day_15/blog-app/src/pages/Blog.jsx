import { Link } from "react-router-dom";

function Blog() {
  const blogs = [
    { id: 1, title: "Learn React Basics" },
    { id: 2, title: "Understanding useEffect" },
    { id: 3, title: "Mastering React Router" },
  ];

  return (
    <div className="page">
      <h1>📝 Blog Page</h1>

      {blogs.map((blog) => (
        <div key={blog.id}>
          <Link to={`/blog/${blog.id}`}>
            {blog.title}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Blog;