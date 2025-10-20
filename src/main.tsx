// main.tsx

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import RootLayout from "./components/ui/RootLayout.tsx"; // <-- REMOVE THIS LINE
import App from "./App.tsx"; // <-- ADD THIS LINE
import HomePage from "./pages/HomePage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import TermsPage from "./pages/TermsPage.tsx";
import PrivacyPage from "./pages/PrivacyPage.tsx";
import ReviewsList from "./components/ui/ReviewsList.tsx";
import ServicesPage from "./pages/ServicesPage.tsx";
import "./index.css";
import { initializeTheme } from "./store/appStore";
import ReviewsPage from "./pages/ReviewsPage.tsx";
import FrontPage from "./pages/FrontPage.tsx";

// Call the theme initialization function here, before the router is created
initializeTheme();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // <-- CHANGE THIS LINE
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
        path: "review",
        element: <ReviewsPage />,
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
    {
      path: "front",
      element: <FrontPage />,
    },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);