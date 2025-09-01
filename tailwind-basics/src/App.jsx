import "./index.css";
import Layout from "./components/Layout";
import Container from "./components/Container";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <Layout>
        <Container>
          <Home />
        </Container>
      </Layout>
    </>
  );
}

export default App;
