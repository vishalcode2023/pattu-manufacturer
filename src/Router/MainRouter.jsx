import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import CollectionsFull from "../components/CollectionsFull";
import ContactSection from "../components/ContactSection";
import Manufacturing from "../components/Manufacturing";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/manufacturing" element={<Manufacturing />} />
      <Route path="/collection" element={<CollectionsFull />} />
      <Route path="/contact" element={<ContactSection />} />
    </Routes>
  );
};

export default MainRouter;
