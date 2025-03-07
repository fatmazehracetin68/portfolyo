import Link from "next/link";

const blogPosts = [
  {
    title: "Yazılıma Başlama Sürecim",
    category: "Kariyer",
    date: "10.02.2025",
    author: "Fatma Zehra ÇETİN",
    slug: "yazilimci-olma-surecim",
  },
  {
    title: "Algoritma ve Çocuk",
    category: "Yazılım",
    date: "25.01.2025",
    author: "Fatma Zehra ÇETİN",
    slug: "algoritma-neden-onemlidir",
  },
];

const Blog = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-[#DF6D2D] text-center font-bold py-10 text-2xl md:text-3xl">
        BLOG YAZILARIM
      </h1>
      <div className="flex flex-wrap gap-6 justify-center">
        {/* Blog yazılarını listele */}
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div className="cursor-pointer w-full md:w-80 h-80 rounded-tl-[80px] rounded-br-[80px] bg-gradient-to-r from-purple-300 to-purple-700 p-6 relative shadow-lg hover:shadow-2xl transition-all ease-in-out duration-300">
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white space-y-4 p-4">
                {/* Başlık */}
                <h1 className="text-2xl md:text-3xl font-semibold text-center tracking-wider leading-relaxed">
                  {post.title}
                </h1>
                {/* Kategori ve Tarih */}
                <div className="flex space-x-2 mt-10">
                  <span className="bg-gray-500 bg-opacity-80 text-white px-3 py-1 rounded-md text-xs font-semibold">
                    {post.category}
                  </span>
                  <span className="bg-gray-500 bg-opacity-80 text-white px-3 py-1 rounded-md text-xs font-semibold">
                    {post.date}
                  </span>
                </div>
                {/* Yazar */}
                <div className="mt-4">
                  <span className="bg-gray-500 bg-opacity-80 text-white px-3 py-1 rounded-md text-xs font-semibold">
                    {post.author}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
