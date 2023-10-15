import React, { useContext, useState } from "react";
import Layout from "../components/Layout";
import {
  ThemeContext,
  setUserContext,
  UserContext,
} from "../contexts/DataContext";

const IndexPage = () => {
  const themeContext = useContext(ThemeContext);
  const setUser = useContext(setUserContext);
  const userContext = useContext(UserContext);
  const [nameInput, setNameInput] = useState("");
  const [imageInput, setImageInput] = useState("");

  function handleOnChange(name, value) {
    // Update the local state when input changes
    if (name === "name") {
      setNameInput(value);
    } else if (name === "image") {
      setImageInput(value);
    }
  }

  function handleClick(e) {
    e.preventDefault();
    const updatedUser = {
      ...userContext,
      name: nameInput,
      image: imageInput,
    };
    setUser(updatedUser);
    setNameInput("");
    setImageInput("");
  }

  return (
    <Layout title="My context app">
      <form onSubmit={(e) => handleClick(e)}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          value={nameInput}
          onChange={(e) => handleOnChange("name", e.target.value)}
          required
        />
        <label htmlFor="image">Proifle pic</label>
        <input
          id="image"
          type="text"
          placeholder="Enter url"
          name="image"
          value={imageInput}
          onChange={(e) => handleOnChange("image", e.target.value)}
          required
        />
        <button type="submit">login</button>
      </form>
    </Layout>
  );
};

export default IndexPage;
