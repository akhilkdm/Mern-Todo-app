const router = require("express").Router();

const {
  addNewItem,
  getAllitem,
  updateItem,
  deleteItem,
} = require("../controllers/todoController");
const { verifyToken } = require("../middlewares/verifyToken");

router.route("/").post(verifyToken, addNewItem);

router.route("/items").post(verifyToken, getAllitem);

router.route("/:id").put(verifyToken, updateItem);

router.route("/:id").delete(verifyToken, deleteItem);

module.exports = router;
