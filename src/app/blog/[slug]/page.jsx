"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { doc, getDoc, updateDoc, increment } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import { notFound } from "next/navigation";

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [liked, setLiked] = useState(false); // Like durumunu takip etmek için bir state

  useEffect(() => {
    const fetchBlog = async () => {
      if (!slug) return;
      const docRef = doc(db, "blogs", slug);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setPost({ id: docSnap.id, ...docSnap.data() });
      } else {
        notFound();
      }
    };

    fetchBlog();
  }, [slug]);

  const handleLike = async () => {
    if (!post) return;

    const docRef = doc(db, "blogs", post.id);
    await updateDoc(docRef, {
      likes: increment(1), // Firebase'de like sayısını 1 arttır
    });

    setLiked(true); // Like'a tıklandığında liked durumunu güncelle
    setPost((prev) => ({ ...prev, likes: (prev.likes || 0) + 1 }));
  };

  if (!post) return <p className="text-center mt-10">Yükleniyor...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="bg-[#E5D9F2] p-6 rounded-md shadow-md">
        <h1 className="text-3xl font-bold text-purple-800">{post.title}</h1>
        <p className="text-gray-600 mt-2">
          {post.date} - {post.author}
        </p>
      </div>
      <p className="mt-6 text-gray-700 leading-relaxed whitespace-pre-line">{post.content}</p>

      <div className="mt-6 flex items-center gap-4 relative">
        <button
          onClick={handleLike}
          className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition"
        >
          Beğendiysen Tıkla {liked ? "❤️" : "🤍"}
        </button>
        <span className="text-lg font-semibold">{post.likes || 0} Beğeni</span>
        {liked && (
          <div className="heart-animation absolute top-[-30px] left-1/2 transform -translate-x-1/2 text-3xl animate-heart">
            ❤️
          </div>
        )}
      </div>
    </div>
  );
}
