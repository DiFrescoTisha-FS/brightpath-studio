import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import HomePage from './components/pages/HomePage.tsx';
import ContactPage from './components/pages/ContactPage';
import TermsPage from './components/pages/TermsPage';
import PrivacyPage from './components/pages/PrivacyPage';
import AboutPage from './components/pages/AboutPage';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // The layout is the main element
    children: [
      {
        index: true, // This makes HomePage the default child route
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);