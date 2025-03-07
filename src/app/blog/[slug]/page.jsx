import { blogPosts } from "@/app/data/blogPost";
import { notFound } from "next/navigation";

// Dinamik sayfa bileşeni
export default function BlogPost({ params }) {
  // Slug parametresine göre blog yazısını alıyoruz
  const post = blogPosts[params.slug];

  // Eğer post bulunamazsa 404 sayfasına yönlendiriyoruz
  if (!post) return notFound();

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

// Slug için statik parametreleri önceden oluştur
export async function generateStaticParams() {
  // Blog yazılarının slug'larını alıp parametre olarak döndürüyoruz
  return Object.keys(blogPosts).map((slug) => ({ slug }));
}
