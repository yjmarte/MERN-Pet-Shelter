const PetController = require("../controllers/pet.controller");

module.exports = (app) => {
  // RETRIEVE ALL
  app.get("/api/pets", PetController.getPets);
  // CREATE
  app.post("/api/pets", PetController.create);
  // RETRIEVE ONE
  app.get("/api/pets/:_id", PetController.getPet);
  // UPDATE
  app.patch("/api/pets/:_id", PetController.updatePet);
  app.patch("/api/like/:_id", PetController.likePet);
  // DELETE
  app.delete("/api/pets/:_id", PetController.deletePet);
};
