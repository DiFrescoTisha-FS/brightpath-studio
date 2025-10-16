import { Outlet } from "react-router-dom";
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";
import { useAppStore } from './store/appStore'; 

const App: React.FC = () => {
  const { theme } = useAppStore();

  return (
    <>
      <Navbar theme={theme} />
      <main>
        <Outlet />
      </main>
      <Footer theme={theme} />
    </>
  );
};

export default App;
