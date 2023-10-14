import "@picocss/pico";

import { useState } from "react";

import { ThemeProvider } from "./contexts/ThemeContext";

import IndexPage from "./pages/IndexPage";

function App() {
  const [name, setName] = useState("ram");

  return (
    <>
      <ThemeProvider>
        <IndexPage />
      </ThemeProvider>

      {/* <NamePrinterP name={name} />
      <NamePrinterH1 name={name} />

      <NameChanger name={name} onNameChange={setName} /> */}
    </>
  );
}

function NamePrinterP(props) {
  return <p>{props.name}</p>;
}

function NamePrinterH1(props) {
  return <h1>{props.name}</h1>;
}

function NameChanger(props) {
  const { onNameChange } = props;
  const [newName, setNewName] = useState(props.name);

  function handleSubmit(e) {
    e.preventDefault();
    onNameChange(newName);
    setNewName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <input type="submit" />
    </form>
  );
}

export default App;
