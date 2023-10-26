import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/esm/Container";
import AllRoutes from "./routes/AllRoutes";

function App() {
  return (
    <Container className="mx-auto w-75">
      <AllRoutes />
    </Container>
  );
}

export default App;
