import React from "react";
import { Link } from "react-router-dom";

//local imports
import TableBody from "./tableBody";

const ListPage = ({ match, items, onAddList }) => {
  const current = items.filter(
    (item) => parseInt(item.id) === parseInt(match.params.itemID)
  );
  console.log(match.params.itemID);

  const listItems = current.map((cur) => cur.list);
  // console.log(listItems)

  const id = parseInt(match.params.itemID);

  const [toggleAdd, setToggleAdd] = React.useState(false);
  const [dispItem, setDispItem] = React.useState("");

  const getItem = (e) => setDispItem(e.target.value);

  const showAddForm = () => {
    setToggleAdd(!toggleAdd);
  };

  const clearInputField = () => setDispItem("");

  const font = {
    textTransform: "capitalize",
    fontWeight: "bolder",
  };

  return (
    <>
      <div className="container mt-3 p-3">
        <div className="row">
          <div className="container">
            <div className="col-md-12">
              <h3 className="text-light text-center " style={font}>
                {current[0].title}
              </h3>
            </div>
          </div>
          <div className="col-2 mr-auto">
            <Link to="/">
              <button className="btn btn-warning">back</button>
            </Link>
          </div>
          <div className="col-5 mx-auto">
            <p className="text-danger text-center mx-auto " style={font}>
              {current[0].list.length} thing(s) to buy
            </p>
          </div>
          <div className="col-5 ml-auto">
            <button className="btn btn-danger" onClick={showAddForm}>
              + add to this list
            </button>
          </div>
          {toggleAdd && (
            <div className="container-fluid mt-3">
              <div className="row">
                <div className="col-md-10">
                  <input
                    type="text"
                    className="form-control mt-1"
                    placeholder="add a new item to this list"
                    value={dispItem}
                    onChange={getItem}
                  />
                </div>
                <div className="col-md-2">
                  <button
                    className="btn btn-primary btn-block mt-1"
                    onClick={() => {
                      onAddList(id, dispItem);
                      clearInputField();
                    }}
                  >
                    done
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <table className="table table-striped table-dark mt-3">
          <thead>
            <tr>
              <th>#</th>
              <th>item</th>
              <th>price</th>
              <th>qauntity</th>
              <th>done</th>
            </tr>
          </thead>
          {<TableBody currentItem={listItems} />}
        </table>
      </div>
    </>
  );
};

export default ListPage;
