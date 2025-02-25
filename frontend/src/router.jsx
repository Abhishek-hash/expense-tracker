// src/router.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";

const AppRouter = () => (
  <Router>
    <MainLayout>
      <h1 className="m-0 py-4">Add all your expenses here.</h1>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </MainLayout>
  </Router>
);

export default AppRouter;
