import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import { Layout } from "./_common";

function App() {
  return (
    <Router>
      <Layout>
        <Routes />
      </Layout>
    </Router>
  );
}

export default App;
