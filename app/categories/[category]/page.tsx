import React from "react";

const Categories = async ({
  params,
}: {
  params: Promise<{ category: string }>;
}) => {
  const { category } = await params;

  const posts: any[] = await fetch("http://localhost:3001/db.json")
    .then((res) => res.json())
    .then((data) => data.posts);
  console.log(posts);
  const filterPost = posts.filter((post) => post.category === category);

  return (
    <div>
      Categories : {category}
      {filterPost.map((filteredPost) => (
        <div>{filteredPost.title}</div>
      ))}
    </div>
  );
};

export default Categories;
