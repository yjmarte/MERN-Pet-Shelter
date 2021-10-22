const Pet = require("../models/pet.model");

module.exports = {
  // CREATE PET
  create: (req, res) => {
    const { name, type, desc, skillone, skilltwo, skillthree } = req.body;
    console.log(req.body);

    Pet.create({ name, type, desc, skillone, skilltwo, skillthree })
      .then((pet) => res.json(pet))
      .catch((err) => res.status(400).json(err));
  },

  // RETRIEVE ALL PETS
  getPets: (req, res) => {
    Pet.find({})
      .sort("type")
      .exec()
      .then((pets) => res.json(pets))
      .catch((err) => res.status(400).json(err));
  },

  // RETRIEVE ONE PET
  getPet: (req, res) => {
    Pet.findOne({ _id: req.params._id })
      .then((pet) => res.json(pet))
      .catch((err) => res.status(400).json(err));
  },

  // UPDATE PET DETAILS
  updatePet: (req, res) => {
    Pet.findOneAndUpdate({ _id: req.params._id }, req.body, {
      new: true,
      runValidators: true,
    })
      .then((updated) => res.json(updated))
      .catch((err) => res.status(400).json(err));
  },

  // UPDATE PET LIKES
  likePet: (req, res) => {
    Pet.findOneAndUpdate({ _id: req.params._id }, { $inc: { likes: 1 } })
      .then((liked) => res.json(liked))
      .catch((err) => res.status(400).json(err));
  },

  // DELETE PET
  deletePet: (req, res) => {
    Pet.deleteOne({ _id: req.params._id })
      .then((adopted) => res.json(adopted))
      .catch((err) => res.status(400).json(err));
  },
};
