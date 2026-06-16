import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    localStorage.setItem(
      "isLoggedIn",
      "false"
    );

    navigate("/Dashboard");
  }

  return (
    <button onClick={handleLogin}>
      Login
    </button>
  );
}

export default Login;