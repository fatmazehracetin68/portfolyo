import { redirect } from "next/navigation";

const Page = () => {
  redirect("/home"); // Home sayfasına yönlendir
  return null; // Yönlendirme yapılırken içerik gösterilmez
};

export default Page;
