import { useContext } from "react";

import Layout from "../components/Layout";
import { ThemeContext } from "../contexts/ThemeContext";

const IndexPage = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <Layout title="My context app">
      <h2>Index page</h2>

      <p>Current theme: {themeContext.value}</p>
    </Layout>
  );
};

export default IndexPage;
