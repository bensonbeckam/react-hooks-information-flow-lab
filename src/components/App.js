import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import items from "../data/items"; // or wherever your items are

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((prev) => !prev);
  }

  return (
    <div data-testid="app-root" className={`App ${isDarkMode ? "dark" : "light"}`}>
      <Header onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={items} />
    </div>
  );
}

export default App;