// import SideBar from "@/components/SideBar";
// import "../styles/globals.css";

// import Footer from "@/components/Footer";

// const Layout = ({ children }) => {
//   return (
//     <html lang="en">
//       <body>
//         <div className=" min-h-screen flex flex-row">
//           <div className="flex flex-1">
//             {/* Sidebar */}
//             <SideBar />
//             <main className="flex-1 p-5 min-h-screen lg:pl-12">{children}</main>
//           </div>
//           <Footer />
//         </div>
//       </body>
//     </html>
//   );
// };
// export default Layout;
import SideBar from "@/components/SideBar";
import "../styles/globals.css";

import Footer from "@/components/Footer";

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className=" min-h-screen flex flex-row">
          <div className="flex flex-1">
            {/* Sidebar */}
            <SideBar />
            <main className="flex-1 p-5 min-h-screen lg:pl-4">{children}</main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
};
export default Layout;
