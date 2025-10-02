import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import HomePage from './components/pages/HomePage.tsx';
import ContactPage from './components/pages/ContactPage';
import AboutPage from './components/pages/AboutPage';
import TermsPage from './components/pages/TermsPage';
import PrivacyPage from './components/pages/PrivacyPage';
import TestimonialsPage from './components/pages/TestimonialsPage';
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

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);