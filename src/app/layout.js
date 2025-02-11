import SideBar from "@/components/SideBar";
import "../styles/globals.css";
import Head from "next/head";
import Footer from "@/components/Footer";

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Head>
          {/* Google Fonts Coda fontunu ekliyoruz */}
          <link
            href="https://fonts.googleapis.com/css2?family=Felipa&family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap"
            rel="stylesheet"
          />
        </Head>
        <div className="flex">
          <SideBar />
          <main className="flex-1">{children}</main> {/* Sayfa içeriği burada */}
          <Footer />
        </div>
      </body>
    </html>
  );
};
export default Layout;
