import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useAppStore } from '@/store/appStore'; // Import the Zustand store

const RootLayout = () => {
  const theme = useAppStore(state => state.theme); // Get the theme state

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

export default RootLayout;