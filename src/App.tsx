import Navbar from "./components/Navbar";
import JournalPage from "./pages/JournalPage";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import MoodTrackerPage from "./pages/MoodTrackerPage";
import NotFoundPage from "./pages/NotFoundPage";
import RegisterPage from "./pages/RegisterPage";
import { GlobalStyle } from "./styles/GlobalStyle";
import { BrowserRouter as Router, Routes, Route } from "react-router";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/journal" element={<JournalPage />} />
          <Route path="/mood" element={<MoodTrackerPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
