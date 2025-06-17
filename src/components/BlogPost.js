import { useParams } from "react-router-dom";
import blogPosts from "../data/blogPosts";

function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id.toString() === id);

  if (!post) return <h2 className="text-center">Post not found!</h2>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-gray-500 text-sm">{post.date}</p>
      <p className="mt-4">{post.content}</p>
    </div>
  );
}

export default BlogPost;
