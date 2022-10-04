const todoModel = require("../models/todoModel");

const addNewItemService = async (todo) => {
  try {
    const newItem = new todoModel({
      item: todo.item,
      userId:todo.userId
    });
    return await newItem.save();
  } catch (error) {
    throw Error(error);
  }
};

const getAllitemService = async (item) => {
    console.log(item)
  try {
    const allTodoItems = await todoModel.find({userId: item.userId}).sort({ _id: -1 });
    return allTodoItems;
  } catch (error) {
    throw Error(error);
  }
};

const updateItemService = async (itemId, item) => {
  try {
    const updatedItem = await todoModel.findByIdAndUpdate(itemId, {
      $set: item,
    });
    return updatedItem;
  } catch (error) {
    throw Error(error);
  }
};

const deleteItemService = async (id) => {
  try {
    const deletedItem = await todoModel.findByIdAndDelete(id);
    return deletedItem;
  } catch (error) {
    throw Error(error);
  }
};

module.exports = {
  addNewItemService,
  getAllitemService,
  updateItemService,
  deleteItemService,
};
