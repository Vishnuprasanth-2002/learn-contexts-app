import React, { useContext, useState } from "react";
import Layout from "../components/Layout";
import { ThemeContext, setUserContext, UserContext } from "../contexts/DataContext";

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

  function handleClick() {
    // Create a new user object with the updated values
    const updatedUser = {
      ...userContext,
      name: nameInput,
      image: imageInput,
    };
    setUser(updatedUser);
  }

  return (
    <Layout title="My context app">
      <h2>Index page</h2>
      <input
        type="text"
        placeholder="Enter Name"
        name="name"
        value={nameInput}
        onChange={(e) => handleOnChange("name", e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter url"
        name="image"
        value={imageInput}
        onChange={(e) => handleOnChange("image", e.target.value)}
      />
      <button onClick={() => handleClick()}>Set Values</button>
      <p>Current theme: {themeContext.value}</p>
    </Layout>
  );
};

export default IndexPage;
