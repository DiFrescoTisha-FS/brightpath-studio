import { Outlet } from "react-router-dom";
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer"; 

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
