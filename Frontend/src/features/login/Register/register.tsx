import { useState, type ChangeEvent, type FormEvent } from "react";
import "./register.css";
import { Register as RegisterAPI } from "../../../shared/config/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await RegisterAPI(formData);
      toast.success(res.data.message);
      navigate("/login");
    } catch (error: any) {
      console.error(error);
      const message = error?.response?.data?.message || "Registration failed";
      toast.error(message);
    }
  };

  return (
    <div className="register-wrapper">
      <form className="RegisterForm" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <input
          placeholder="Username"
          name="username"
          onChange={handleChange}
          value={formData.username}
          type="text"
        />
        <input
          placeholder="Email"
          name="email"
          onChange={handleChange}
          value={formData.email}
          type="email"
        />
        <input
          placeholder="Password"
          name="password"
          onChange={handleChange}
          value={formData.password}
          type="password"
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
