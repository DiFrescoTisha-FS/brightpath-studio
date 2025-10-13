import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/ui/RootLayout.tsx";
import HomePage from "./pages/HomePage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import TermsPage from "./pages/TermsPage.tsx";
import PrivacyPage from "./pages/PrivacyPage.tsx";
import TestimonialsPage from "./pages/TestimonialsPage.tsx";
import ReviewsList from "./components/ui/ReviewsList.tsx";
import ServicesPage from "./pages/ServicesPage.tsx";
import "./index.css";
// Import the initializeTheme function from your Zustand store
import { initializeTheme } from "./store/appStore";
import { ThemeProvider } from "./components/ThemeProvider.tsx";

// Call the theme initialization function here, before the router is created
initializeTheme();

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "services",
        element: <ServicesPage />,
      },
      {
        path: "testimonial",
        element: <TestimonialsPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "terms-of-service",
        element: <TermsPage />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPage />,
      },
      {
        path: "reviews",
        element: <ReviewsList />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
