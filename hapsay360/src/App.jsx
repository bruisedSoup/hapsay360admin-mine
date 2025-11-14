import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPortal from "./Auth/AuthPortal";
import ForgotPassword from "./Auth/ForgotPassword";
import CreateNewPassword from "./Auth/CreateNewPassword";
import AdminDashboard from "./Pages/AdminDashboard";
import UserDatabasePage from "./Pages/UserDatabasePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPortal />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/CreateNewPassword" element={<CreateNewPassword />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/UserDatabase" element={<UserDatabasePage />} />
      </Routes>
    </Router>
  );
}

export default App;
