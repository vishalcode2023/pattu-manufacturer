import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import B2BPage from "../components/B2bpage";
import B2CPage from "../components/B2cpage";
import CollectionsFull from "../components/CollectionsFull";
import ContactSection from "../components/ContactSection";
import Manufacturing from "../components/Manufacturing";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/b2b" element={<B2BPage />} />
      <Route path="/b2c" element={<B2CPage />} />
      <Route path="/manufacturing" element={<Manufacturing />} />
      <Route path="/collection" element={<CollectionsFull />} />
      <Route path="/contact" element={<ContactSection />} />
    </Routes>
  );
};

export default MainRouter;
