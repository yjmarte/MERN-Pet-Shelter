import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { LocationProvider, Router } from "@reach/router";

import Header from "../components/Header";
import PetDetails from "../components/PetDetails";
import PetList from "../components/PetList";

const Main = () => {
  const [pets, setPets] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/pets")
      .then((res) => {
        setPets(res.data);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, [pets]);

  const remove = (petId) => {
    setPets(pets.filter((pet) => pet._id !== petId));
  };

  return (
    <Row>
      <LocationProvider>
        <Header />
        <Router>
          <PetList path="/" pets={pets} loaded={loaded} />
          <CreatePet path="/pets/new" />
          <PetDetails path="/pets/:_id" remove={remove} />
          <UpdatePet path="/pets/:_id/edit" />
        </Router>
      </LocationProvider>
    </Row>
  );
};

export default Main;
