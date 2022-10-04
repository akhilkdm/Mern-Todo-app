const {
  addNewItemService,
  getAllitemService,
  updateItemService,
  deleteItemService,
} = require("../services/todoService");

const addNewItem = async (req, res) => {
  try {
    const savedItem = await addNewItemService(req.body);
    if (savedItem) {
      res.status(200).json(savedItem);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const getAllitem = async (req, res) => {
  console.log("body",req.body)
  try {
    const allTodoItems = await getAllitemService(req.body);
    if (allTodoItems) {
      res.status(200).json(allTodoItems);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateItem = async (req, res) => {
  try {
    const itemId = req.params.id;
    const updatedItem = await updateItemService(itemId, req.body);
    if (updatedItem) {
      res.status(200).json(updatedItem);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteItem = async (req, res) => {
  try {
    const deletedItem = await deleteItemService(req.params.id);
    if (deleteItem) {
      res.status(200).json(deletedItem);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { addNewItem, getAllitem, updateItem, deleteItem };
