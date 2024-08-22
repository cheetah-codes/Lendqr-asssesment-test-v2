import { useEffect, useState } from "react";
import { AuthContextType } from "../../contexts/AuthContext";
import { onAuthStateChanged } from "firebase/auth";
import { authenticator } from "../../utils/firebase.config";
import { useNavigate } from "react-router-dom";

// const { user, setUser } = useAuth();

export type AuthPropType = AuthContextType &
  React.ComponentProps<"div" | "button" | "form">;

interface PropType {
  children?: React.ReactNode;
}

const AuthLayout = ({ children }: PropType) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    authCheck();

    return () => {
      authCheck();
    };
  }, [authenticator]);

  const authCheck = onAuthStateChanged(authenticator, (user) => {
    if (user) {
      setLoading(false);
    } else {
      navigate("/Login");
    }
  });

  return <>{children}</>;
};

export default AuthLayout;
