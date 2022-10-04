const router = require("express").Router();

const {
  addNewItem,
  getAllitem,
  updateItem,
  deleteItem,
} = require("../controllers/todoController");

router.route("/").post(addNewItem);

router.route("/items").post(getAllitem);

router.route("/:id").put(updateItem);

router.route("/:id").delete(deleteItem);

module.exports = router;
