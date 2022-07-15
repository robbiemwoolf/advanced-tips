const router = require("express").Router();
const controller = require("./notes.controller");
const methodDisallowed = require("../errors/methodDisallowed");
const ratingsRouter = require("../ratings/ratings.router");

router.use("/:noteId/ratings", controller.noteExists, ratingsRouter);

router
  .route("/:noteId")
  .get(controller.read)
  .put(controller.update)
  .delete(controller.delete)
  .all(methodDisallowed);

router
  .route("/")
  .get(controller.list)
  .post(controller.create)
  .all(methodDisallowed);

module.exports = router;
