import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Row, Table } from "react-bootstrap";
import { navigate } from "@reach/router";

const PetDetails = (props) => {
  const [pet, setPet] = useState({
    name: "",
    type: "",
    desc: "",
    skillone: "",
    skilltwo: "",
    skillthree: "",
  });
  const [likes, setLikes] = useState(0);

  const display = () => {
    axios
      .get(`http://localhost:8000/api/pets/${props._id}`)
      .then((res) => {
        setPet(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    display();
  }, [props._id]);

  const like = (petId) => {
    axios
      .patch("http://localhost:8000/api/like/" + petId, { likes })
      .then((res) => {
        display();
      })
      .catch((err) => console.log(err));
    document.getElementById("like_button").setAttribute("disabled", "disabled");
  };

  const deletePet = (_id) => {
    axios
      .delete(`http://localhost:8000/api/pets/${pet._id}`)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <h5 className="my-4">Details about {pet.name}</h5>
      <Row className="justify-content-center">
        <Button
          onClick={(e) => {
            deletePet(pet._id);
          }}
          className="btn btn-danger w-auto align-baseline"
        >
          Adopt this pet!
        </Button>
      </Row>
      <Row className="justify-content-center my-4">
        <Table className="w-75" bordered hover>
          <tbody>
            <tr>
              <td>
                <strong>Pet Type</strong>
              </td>
              <td>{pet.type}</td>
            </tr>
            <tr>
              <td>
                <strong>Description</strong>
              </td>
              <td>{pet.desc}</td>
            </tr>
            <tr>
              <td>
                <strong>Skills</strong>
              </td>
              <td>
                {pet.skillone && pet.skilltwo && pet.skillthree
                  ? pet.skillone + "," + pet.skilltwo + "," + pet.skillthree
                  : "None"}
              </td>
            </tr>
            <tr>
              <td>
                <strong>Likes</strong>
              </td>
              <td className="position-relative">
                <Button
                  id="like_button"
                  variant="success"
                  onClick={(e) => like(pet._id)}
                  className=""
                >
                  Like {pet.name}
                </Button>
                <span className="mx-4">{pet.likes} like(s)</span>
              </td>
            </tr>
          </tbody>
        </Table>
      </Row>
    </>
  );
};

export default PetDetails;
