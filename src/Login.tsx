import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { setCookie } from "typescript-cookie";
import { isAuthenticated } from "./utils/auth-helper";

const Login = () => {
  const [isToken, setToken] = useState();
  const navigate = useNavigate();
  const [queryParameters] = useSearchParams();
  // const returnUrl = `http://accounts.pisales.xyz/?returnUrl=http://localhost:5010`;
  const returnUrl = `http://accounts.pisales.xyz/?returnUrl=pi-hr-auth.vercel.app`;
  const authenticated = isAuthenticated();

  useEffect(() => {
    if (queryParameters.get("ack") as string) {
      const allData = JSON.parse(queryParameters.get("ack") as string);

      if (allData?.access_token) {
        setToken(allData.access_token);
        setCookie("auth", allData.access_token);
        navigate("/dashboard");
      }
    }
  }, [navigate, queryParameters]);

  useEffect(() => {
    if (authenticated) {
      navigate("/dashboard");
    }
  }, [authenticated, navigate]);

  return (
    <div>
      {!isToken && (
        <div
          style={{
            position: "absolute",
            left: "0",
            right: 0,
            top: 0,
            bottom: 0,
            overflow: "hidden",
          }}
        >
          <iframe
            src={returnUrl}
            title="login page"
            width="100%"
            height="100%"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Login;
