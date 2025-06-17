// src/Blog.js
import { Link } from "react-router-dom";
import blogPosts from "../data/blogPosts";

function Blog() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.id} className="mb-4">
            <Link to={`/blog/${post.id}`} className="text-blue-500 hover:underline">
              <h2 className="text-xl font-semibold">{post.title}</h2>
            </Link>
            <p className="text-gray-500 text-sm">{post.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Blog;
