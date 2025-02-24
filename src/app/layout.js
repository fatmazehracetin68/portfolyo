import SideBar from "@/components/SideBar";
import "../styles/globals.css";

import Footer from "@/components/Footer";

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          <SideBar />
          <main className="flex-1 p-5 min-h-screen lg:pl-24">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
};
export default Layout;
