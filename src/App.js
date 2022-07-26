import Layout from "./components/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import routes from "./routes";
import { useEffect } from "react";
import AOS from "aos"
function App() {
  useEffect(()=>{
      AOS.init()
  },[])
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
