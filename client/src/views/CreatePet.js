import { navigate } from "@reach/router";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { Alert } from "react-bootstrap";
import PetForm from "../components/PetForm";

const CreatePet = () => {
  const [pet, setPet] = useState({
    name: "",
    type: "",
    desc: "",
    skillone: "",
    skilltwo: "",
    skillthree: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setPet({
      ...pet,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/api/pets", pet)
      .then((res) => {
        if (res.data.errors) {
          setErrors(res.data.errors);
        } else {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err.response);
        setErrors(err.response.data.errors);
      });
  };

  return (
    <>
      <PetForm
        pet={pet}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        errors={errors}
      />
    </>
  );
};

export default CreatePet;
