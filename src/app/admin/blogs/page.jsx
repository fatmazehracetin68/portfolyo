"use client";
import { useEffect, useState } from "react";
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { auth, db } from "@/firebaseConfig";

export default function BlogDashboard() {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [editId, setEditId] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchBlogs = async () => {
      const querySnapshot = await getDocs(collection(db, "blogs"));
      setBlogs(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };

    fetchBlogs();
  }, []);

  const handleAddOrUpdateBlog = async () => {
    if (editId) {
      await updateDoc(doc(db, "blogs", editId), {
        title,
        content,
        category,
        date: date || new Date().toLocaleDateString("tr-TR"),
        author,
      });
      setEditId(null);
    } else {
      await addDoc(collection(db, "blogs"), {
        title,
        content,
        category,
        date: date || new Date().toLocaleDateString("tr-TR"),
        author,
        createdAt: new Date(),
      });
    }

    setTitle("");
    setCategory("");
    setDate("");
    setAuthor("");
    setContent("");
  };

  const handleDeleteBlog = async (id) => {
    await deleteDoc(doc(db, "blogs", id));
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  const handleEditBlog = (blog) => {
    setEditId(blog.id);
    setTitle(blog.title);
    setCategory(blog.category);
    setDate(blog.date);
    setAuthor(blog.author);
    setContent(blog.content);
  };

  return (
    <div className="bg-[#efa275]">
      <h2 className="p-3">Blog Yönetimi</h2>
      <div className="bg-[#E5D9F2] flex flex-col p-3">
        <input
          className="w-1/2 p-3 rounded-md m-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Başlık"
        />
        <input
          className="w-1/2 p-3 rounded-md m-2"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Kategori"
        />
        <input
          className="w-1/2 p-3 rounded-md m-2"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="Tarih"
        />
        <input
          className="w-1/2 p-3 rounded-md m-2"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Yazar"
        />
        <textarea
          className="rounded-md m-2 p-3"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="İçerik"
        />
        <button
          className="bg-purple-700 w-24 h-8 rounded-md text-white m-2"
          onClick={handleAddOrUpdateBlog}
        >
          {editId ? "Güncelle" : "Ekle"}
        </button>
      </div>

      <h3>Mevcut Bloglar</h3>
      <ul className="bg-red-300 ">
        {blogs.map((blog) => (
          <li key={blog.id} className=" m-5 p-3 rounded-md">
            <p>
              <strong>Başlık:</strong> {blog.title}
            </p>
            <p>
              <strong>İçerik:</strong> {blog.content}
            </p>
            <p>
              <strong>Kategori:</strong> {blog.category}
            </p>
            <p>
              <strong>Tarih:</strong> {blog.date}
            </p>
            <p>
              <strong>Yazar:</strong> {blog.author}
            </p>
            <button
              className="bg-red-600 text-white p-2 rounded-md m-2"
              onClick={() => handleDeleteBlog(blog.id)}
            >
              Sil
            </button>
            <button
              className="bg-blue-600 text-white p-2 rounded-md m-2"
              onClick={() => handleEditBlog(blog)}
            >
              Düzenle
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
