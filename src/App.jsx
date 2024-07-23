import { useState } from "react";
import VoiceAssistantPage from "./pages/VoiceAssistantPage";
import VirtualAssistantsPage from "./pages/VirtualAssistantsPage";
import CallHistoryPage from "./pages/CallHistoryPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import OTP from "./pages/OTP";
import VirtualAssistantPageForAdmin from "./pages/VirtualAssistantPageForAdmin";
import ClientsPageForAdmin from "./pages/ClientsPageForAdmin";
import KnowledgeBasePageForAdmin from "./pages/KnowledgeBasePageForAdmin";
import { createBrowserRouter } from "react-router-dom";

const App = createBrowserRouter([
  {
    path: "/",
    element: <AdminDashboardPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/call-history",
    element: <CallHistoryPage />,
  },
  {
    path: "/voice-assistant",
    element: <VoiceAssistantPage />,
  },
  {
    path: "/virtual-assistants",
    element: <VirtualAssistantsPage />,
  },
  {
    path: "/knowledge-base",
    element: <KnowledgeBasePageForAdmin />,
  },
  {
    path: "/otp",
    element: <OTP />,
  },
  {
    path: "/virtual-assistant-page",
    element: <VirtualAssistantPageForAdmin />,
  },
  {
    path: "/clients-page",
    element: <ClientsPageForAdmin />,
  },
]);

export default App;
