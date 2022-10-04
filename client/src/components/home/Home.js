import React, { useEffect, useState } from "react";
import "./home.css";
import axios from "axios";

export const Home = () => {
  const [itemText, setItemText] = useState("");
  const [listItems, setListItems] = useState([]);
  const [isUpdating, setIsUpdating] = useState("");
  const [updateItemText, setUpdateItemText] = useState("");

  const regex = new RegExp(/^\s+$/);
  const data = localStorage.getItem("userData");
  const user = JSON.parse(data);

  const addItem = async (e) => {
    e.preventDefault();
    try {
      if (!regex.test(itemText) && itemText !== "") {
        const res = await axios.post("http://localhost:5500/api/item", {
          item: itemText,
          userId: user._id,
        });
        setListItems((prev) => [...prev, res.data]);
        setItemText("");
        getItemList();
      }
    } catch (error) {}
  };

  const getItemList = async () => {
    try {
      const res = await axios.post("http://localhost:5500/api/item/items", {
        userId: user._id,
      });
      setListItems(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getItemList();
  }, []);

  //delete items
  const deleteItem = async (id) => {
    try {
      await axios.delete(`http://localhost:5500/api/item/${id}`);
      const newListItem = listItems.filter((item) => item._id !== id);
      setListItems(newListItem);
    } catch (err) {
      console.log(err);
    }
  };

  //update item
  const updateItem = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `http://localhost:5500/api/item/${isUpdating}`,
        { item: updateItemText }
      );
      const updatedItemIndex = listItems.findIndex(
        (item) => item._id === isUpdating
      );
      listItems[updatedItemIndex].item = updateItemText;
      setUpdateItemText("");
      setIsUpdating("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (item) => {
    setIsUpdating(item._id);
    setUpdateItemText(item.item);
  };

  const renderUpdateForm = () => {
    return (
      <form className="update-form" onSubmit={(e) => updateItem(e)}>
        <input
          className="update-new-input"
          type="text"
          placeholder="New Item"
          onChange={(e) => setUpdateItemText(e.target.value)}
          value={updateItemText}
        />
        <button className="update-new-btn" type="submit">
          Update
        </button>
      </form>
    );
  };

  return (
    <div className="Home">
      <h1>Todo List</h1>
      <form className="form" onSubmit={(e) => addItem(e)}>
        <input
          type="text"
          placeholder="Add Todo Item"
          onChange={(e) => setItemText(e.target.value)}
          value={itemText}
        />
        <button type="submit">Add</button>
      </form>
      <div className="todo-listItems">
        {listItems.map((item, i) => (
          <div className="todo-item">
            {isUpdating === item._id ? (
              renderUpdateForm()
            ) : (
              <>
                <p className="item-content" key={i}>
                  {item.item}
                </p>
                <button
                  className="update-item"
                  onClick={() => handleEdit(item)}
                >
                  Update
                </button>
                <button
                  className="delete-item"
                  onClick={() => deleteItem(item._id)}
                >
                  Delete
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
