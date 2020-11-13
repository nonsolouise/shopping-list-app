import React from "react";
import { Switch, Route } from "react-router-dom";

//local imports
import Header from "./head";
import ListDisplay from "./listDisplay";
import Footer from "./foot";
import Form from "../form";
import ListPage from "./listPage";

let itemID = 10;
const newItemID = () => {
  let newItemIDish = itemID++;
  return newItemIDish;
};

let ID = 0;
const newId = () => {
  let newIDish = ID++;
  return newIDish;
};

const style = {
  backgroundColor: "#555",
  width: "100%",
  height: "120vh",
};

const ShoppingList = () => {
  const initialDate = [
    {
      title: "globus shopping list",
      id: newId(),
      list: [
        {
          item: "milo",
          price: 150,
          itemID: newItemID(),
          isChecked: false,
          amount: 1,
        },
        {
          item: "corn flakes",
          price: 120,
          itemID: newItemID(),
          isChecked: true,
          amount: 2,
        },
        {
          item: "sugar",
          price: 100,
          itemID: newItemID(),
          isChecked: false,
          amount: 2,
        },
        {
          item: "milk",
          price: 200,
          itemID: newItemID(),
          isChecked: false,
          amount: 1,
        },
      ],
    },
    {
      title: "cele market list",
      id: newId(),
      list: [
        {
          item: "tatashe",
          price: 150,
          itemID: newItemID(),
          isChecked: false,
          amount: 1,
        },
        {
          item: "onions",
          price: 100,
          itemID: newItemID(),
          isChecked: false,
          amount: 2,
        },
        {
          item: "meat",
          price: 200,
          itemID: newItemID(),
          isChecked: false,
          amount: 1,
        },
      ],
    },
    {
      title: "lagos island shopping list",
      id: newId(),
      list: [
        {
          item: "jeans",
          price: 150,
          itemID: newItemID(),
          isChecked: false,
          amount: 1,
        },
        {
          item: "shirts",
          price: 100,
          itemID: newItemID(),
          isChecked: false,
          amount: 2,
        },
        {
          item: "shoe",
          price: 200,
          itemID: newItemID(),
          isChecked: false,
          amount: 1,
        },
      ],
    },
  ];

  const [items, setItems] = React.useState(initialDate);

  const deleteItem = (id) => {
    let newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  const addList = (title) => {
    setItems([...items, { title, id: newId(), list: [] }]);
  };

  const addListItem = (id, inputItem) => {
    let newItems = items.map((item) => {
      if (item.id === id) {
        console.log("item id is " + item.id);
        item.list = [
          ...item.list,
          {
            item: inputItem,
            price: 200,
            itemId: newItemID(),
            isChecked: false,
            amount: 1,
          },
        ];
      }
      return item;
    });
    setItems(newItems);
  };

  const Spcn = {
    marginBottom: "2rem",
  };

  return (
    <div style={style}>
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <div className="mt-2 container">
              <Form handleAddList={addList} className="mt-2 ml-1" />
              {items.map((item) => (
                <ListDisplay
                  title={item.title}
                  id={item.id}
                  handleDelete={deleteItem}
                  style={Spcn}
                />
              ))}
            </div>
          )}
        />
        <Route
          exact
          path="/items/:itemID"
          render={(props) => (
            <ListPage onAddList={addListItem} items={items} {...props} />
          )}
        />
      </Switch>
      <Footer />
    </div>
  );
};

export default ShoppingList;
