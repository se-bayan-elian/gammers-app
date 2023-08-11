import { useRoutes } from "react-router-dom";
import routes from "./routes";

const Router = () => {
  console.log(routes);
  const router = useRoutes(routes);

  return router;
};

export default Router;
