import CategoryFilter from "../components/CategoryFilter";
import PostCard from "../components/PostCard";

export default async function Home() {
  const posts = await fetch("http://localhost:3001/db.json")
    .then((res) => res.json())
    .then((data) => data.posts);

  console.log(posts);
  const categories = await fetch("http://localhost:3001/db.json")
    .then((res) => res.json())
    .then((data) => data.categories);

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Islamic Blog</h1>
      <CategoryFilter categories={categories} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.map((post: any) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}
