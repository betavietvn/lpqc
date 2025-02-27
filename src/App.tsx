import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";

import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileContactBar from "./components/MobileContactBar";
import SocialSidebar from "./components/SocialSidebar";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Header />
        <SocialSidebar />
        <div className="pt-16">
          {/* Add padding top to account for fixed header */}
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
        </div>
        <Footer />
        <MobileContactBar />
      </>
    </Suspense>
  );
}

export default App;
