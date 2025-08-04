import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./features/login/login";
import Register from "./features/login/Register/register";
import Home from "./features/home/homepage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginGuard from "./shared/guards/loginGuard";
import AuthGuard from "./shared/guards/authGuard";
import Profile from "./features/Profile/profile";

function App() {
  //Functionality
  return (
    //HTML
    <div>
      <Routes>
        <Route
          path="/home"
          element={
            <AuthGuard>
              <Home />
            </AuthGuard>
          }
        />
        <Route
          path="/profile"
          element={
            <AuthGuard>
              <Profile />
            </AuthGuard>
          }
        />
        <Route path="/" element={<Register />} />
        <Route
          path="/login"
          element={
            <LoginGuard>
              <Login />
            </LoginGuard>
          }
        />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;
