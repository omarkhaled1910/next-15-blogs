"use client";
import { StarIcon, StarFilledIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";

const favKey = "favKey";

export default function PostCard({ post }: { post: any }) {
  const [isClient, setIsClient] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = (id: string) => {
    if (!isClient) return;
    const prevLiked = JSON.parse(localStorage.getItem(favKey) || "") || [];

    localStorage.setItem(favKey, JSON.stringify([...prevLiked, id]));
    setIsLiked(true);
  };
  useEffect(() => {
    setIsClient(true);
    const alreadyLiked = JSON.parse(localStorage.getItem(favKey) || "") || [];
    if (alreadyLiked.length === 0) {
      localStorage.setItem(favKey, JSON.stringify([]));
    } else setIsLiked(!!alreadyLiked.find((id: string) => id === post?.id));
  }, []);

  return (
    <div className="border p-4 rounded shadow">
      {isLiked ? (
        <StarFilledIcon className="text-yellow-500 cursor-pointer" />
      ) : (
        <StarIcon
          onClick={() => handleLike(post?.id)}
          className="text-gray-600 cursor-pointer"
        />
      )}
      <h2 className="text-xl font-semibold">{post.title}</h2>
      <p className="text-gray-700">{post.description}</p>
    </div>
  );
}
