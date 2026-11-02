import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import MainRouter from "./Router/MainRouter";
import SocialPopup from "./components/SocialPopup";
import Seo from "./components/Seo";

export default function App() {
  return (
    <div className="min-h-screen bg-ivory">
      <Seo />
      <MainRouter/>
      <SocialPopup />
    </div>
  );
}
