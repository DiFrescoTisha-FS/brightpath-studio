import { Outlet } from "react-router-dom";
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";
import OurProcessSection from './components/sections';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
        <OurProcessSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
