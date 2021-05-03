const router = require("express").Router();
const techstackModel = require("../../server/models/Techstack");


router.get("/api/techstack", async (request, response) => {
  const techstack = await techstackModel.find({});

  try {
    response.send(techstack);
  } catch (error) {
    response.status(500).send(error);
  }
});





router.post("/api/techstack", async (request, response) => {
  const techstack = new techstackModel(request.body);

  try {
    await techstack.save();
    response.send(techstack);
  } catch (error) {
    response.status(500).send(error);
  }
});

router.patch("/api/techstack/:id", async (request, response) => {
  try {
    await techstackModel.findByIdAndUpdate(request.params.id, request.body);
    await techstackModel.save();
    response.send(techstack);
  } catch (error) {
    response.status(500).send(error);
  }
});




router.delete("/api/techstack/:id", async (request, response) => {
  try {
    const techstack = await techstackModel.findByIdAndDelete(request.params.id);

    if (!techstack) response.status(404).send("No item found");
    response.status(200).send("deleted");
  } catch (error) {
    response.status(500).send(error);
  }
});


module.exports = router;