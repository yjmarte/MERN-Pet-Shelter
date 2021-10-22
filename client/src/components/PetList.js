import { Link } from "@reach/router";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Table } from "react-bootstrap";

const PetList = (props) => {
  const [pets, setPets] = useState([]);
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/pets")
      .then((res) => {
        setPets(res.data);
        setLoaded(true);
      }).catch(err => console.log(err.response.data));
  }, [pets]);

  return (
    <>
      <h5 className="my-4">These pets are looking for an amazing home</h5>
      <Table bordered striped hover>
        <thead>
          <tr>
            <th>
              <strong>Name</strong>
            </th>
            <th>
              <strong>Type</strong>
            </th>
            <th colSpan="2">
              <strong>Actions</strong>
            </th>
          </tr>
        </thead>
        <tbody>
          {loaded ? (
            pets
              .map((pet, index) => {
                return (
                  <tr key={index}>
                    <td>{pet.name}</td>
                    <td>{pet.type}</td>
                    <td className="position-relative">
                      <Link
                        to={"/pets/" + pet._id}
                        className="btn btn-sm btn-info text-white position-absolute top-50 start-50 translate-middle"
                      >
                        Details
                      </Link>
                    </td>
                    <td className="position-relative">
                      <Link
                        to={"/pets/" + pet._id + "/edit"}
                        className="btn btn-sm btn-warning text-white position-absolute top-50 start-50 translate-middle"
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                );
              })
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                No pets in the shelter.
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
};

export default PetList;
