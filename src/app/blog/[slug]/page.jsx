"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import { notFound } from "next/navigation";

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

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
    </div>
  );
}
