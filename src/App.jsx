import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import MainRouter from "./Router/MainRouter";

export default function App() {
  return (
    <div className="min-h-screen bg-ivory">
      <MainRouter/>
    </div>
  );
}
