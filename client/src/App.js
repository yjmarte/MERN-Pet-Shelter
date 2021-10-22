import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import { LocationProvider, Router } from "@reach/router";
import Header from "./components/Header";
import PetList from "./components/PetList";
import PetDetails from "./components/PetDetails";
import CreatePet from "./views/CreatePet";
import UpdatePet from "./views/UpdatePet";

function App() {
  return (
    <Container>
      <Row>
        <LocationProvider>
          <Header />
          <Router>
            <PetList path="/" />
            <CreatePet path="/pets/new" />
            <PetDetails path="/pets/:_id" />
            <UpdatePet path="/pets/:_id/edit" />
          </Router>
        </LocationProvider>
      </Row>
    </Container>
  );
}

export default App;
