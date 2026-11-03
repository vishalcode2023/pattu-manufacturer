import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import B2BPage from "../components/B2bpage";
import B2CPage from "../components/B2cpage";
import CollectionsFull from "../components/CollectionsFull";
import ContactSection from "../components/ContactSection";
import Manufacturing from "../components/Manufacturing";
import Blog from "../pages/Blog";
import NotFound from "../pages/NotFound";

const LazyBlogPost = lazy(() => import("../pages/BlogPost"));

const MainRouter = ({ prerenderBlogPost }) => {
  const BlogPostRoute = prerenderBlogPost ?? LazyBlogPost;

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route
        path="/blog/:slug"
        element={
          <Suspense fallback={<p className="p-8 text-charcoal">Loading guide...</p>}>
            <BlogPostRoute />
          </Suspense>
        }
      />
      <Route path="/b2b" element={<B2BPage />} />
      <Route path="/b2c" element={<B2CPage />} />
      <Route path="/manufacturing" element={<Manufacturing />} />
      <Route path="/collection" element={<CollectionsFull />} />
      <Route path="/contact" element={<ContactSection />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MainRouter;
