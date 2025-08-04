import type { JSX } from "react";
import { Navigate } from "react-router-dom";
import type { IUser } from "../Interfaces/User";

interface RoleGuardProps {
  allowedRoles: string[];
  children: JSX.Element;
}

const RoleGuard = ({ allowedRoles, children }: RoleGuardProps) => {
  const token = localStorage.getItem("token");
  const user: IUser | null = JSON.parse(
    localStorage.getItem("currentUser") || "null"
  );

  if (!token || !user) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default RoleGuard;
