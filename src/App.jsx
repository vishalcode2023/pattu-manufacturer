import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import MainRouter from "./Router/MainRouter";
import SocialPopup from "./components/SocialPopup";

export default function App() {
  return (
    <div className="min-h-screen bg-ivory">
      <MainRouter/>
      <SocialPopup />
    </div>
  );
}
