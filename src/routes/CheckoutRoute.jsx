import { Navigate } from "react-router-dom";

const CheckoutRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  // Chưa đăng nhập, điều hướng user về trang login
  if (!user) {
    return <Navigate to="/login" />;
  }

  // đã đăng nhập
  return children;
};

export default CheckoutRoute;
