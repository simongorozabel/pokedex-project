import { Navigate } from "react-router-dom";
import { UserNameContext } from "../../context/UserNameContext";
import { useContext } from "react";

const ProtectedRoute = ({ children }) => {
  const { userName } = useContext(UserNameContext);

  if (userName) {
    return <>{children}</>;
  } else return <Navigate to="/" />;
};

export default ProtectedRoute;
