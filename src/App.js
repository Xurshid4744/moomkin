import Layout from "./components/Layout/Layout";
import { Routes, Route, useLocation } from "react-router-dom";
import routes from "./routes";
import { useEffect } from "react";
import AOS from "aos";
function App() {
  const location = useLocation()
  useEffect(() => {
    AOS.init();
    document.documentElement.scrollTop = 0
  }, [location.pathname]);
  return (
    <Layout>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route path={path} element={element} key={path} />
        ))}
      </Routes>
    </Layout>
  );
}

export default App;
