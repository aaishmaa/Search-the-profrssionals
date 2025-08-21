import { useState, type ChangeEvent, type FormEvent } from "react";
import "./login.css";
import { login } from "../../shared/config/api";
import { type AxiosResponse } from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false); // Added loading state
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) {
      return;
    }
    setLoading(true);

    login(formData)
      .then((res: AxiosResponse) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("currentUser", JSON.stringify(res.data.user));
        navigate("/home");
      })
      .catch((error: any) => {
        const message = (error.response?.data as String) ?? "Server Error";
        toast.error(message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="login-wrapper">
      <form className="loginForm" onSubmit={handleSubmit} action="">
        <h2>Login</h2>
        <input
          placeholder="Username"
          name="username"
          onChange={handleChange}
          value={formData.username}
          type="text"
        />
        <input
          placeholder="Password"
          name="password"
          onChange={handleChange}
          value={formData.password}
          type="password"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
