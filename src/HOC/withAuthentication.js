import { useNavigate } from "react-router";

const withAuthentication = (WrappedComponent) => (props) => {
  const navigate = useNavigate();

  const isLoggedId = false;

  if (isLoggedId) navigate("/login", { replace: true });

  return <WrappedComponent {...props} />;
};
export default withAuthentication;
