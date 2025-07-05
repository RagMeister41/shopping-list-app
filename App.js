import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const [items, setItems] = React.useState([]);

  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };

  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleDoneItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  return (
    <div className="appWrapper">
      <Header />
      <Main
        items={items}
        handleAddItems={handleAddItems}
        onDeleteItem={handleDeleteItem}
        onDoneItem={handleDoneItem}
      />
      <Footer items={items} />
    </div>
  );
}

export default App;