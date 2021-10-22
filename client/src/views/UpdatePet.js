import { navigate } from "@reach/router";
import axios from "axios";
import React, { useEffect, useState } from "react";
import PetForm from "../components/PetForm";

const UpdatePet = (props) => {
  const [pet, setPet] = useState({
    name: "",
    type: "",
    desc: "",
    skillone: "",
    skilltwo: "",
    skillthree: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/pets/${props._id}`)
      .then((res) => {
        setPet(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, [props._id]);

  const handleChange = (e) => {
    setPet({
      ...pet,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .patch(`http://localhost:8000/api/pets/${props._id}`, pet)
      .then((res) => {
        if (res.data.errors) {
          setErrors(res.data.errors);
        } else {
          navigate("/");
        }
      })
      .catch((err) => {
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

export default UpdatePet;
