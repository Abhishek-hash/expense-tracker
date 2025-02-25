// src/layout/MainLayout.jsx
import Header from "../Header";
import Sidebar from "../Sidebar";
import Footer from "../Footer";

const MainLayout = ({ children }) => (
  <div className="flex h-screen overflow-hidden">
    <Sidebar />
    <div className="flex flex-col flex-1">
      <Header />
      <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">{children}</main>
      <Footer />
    </div>
  </div>
);

export default MainLayout;
