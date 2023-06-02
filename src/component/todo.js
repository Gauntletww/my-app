import React, { useState } from "react";
export default function Todo() {
  const [add, add_items] = useState([]);
  const [todo, todo_list] = useState("");
  const add_list = () => {
    add_items((current_todo) => {
      return [
        ...current_todo,
        { id: crypto.randomUUID(), checked: false, title: todo },
      ];
    });
    todo_list("");
  };
  const tick = (id, checked) => {
    add_items((current_todo) => {
      return current_todo.map((items) => {
        if (items.id === id) {
          return { ...items, checked };
        }
        return items;
      });
    });
  };
  const remove = (clicked_id) => {
    console.log(clicked_id)
    add_items((remove_item) => {
      console.log(JSON.stringify(remove_item))
    return remove_item.filter(obj=> obj.id !== clicked_id)
    });
  };
  return (
    <>
      <input
        className="form-control mt-4"
        id="mybox"
        type="text"
        onChange={(event) => todo_list(event.target.value)}
        value={todo}
      ></input>
      <button className="btn btn-secondary mt-3" onClick={add_list}>
        Add to list
      </button>
      <h1 className="display-4 mt-3">Todo List</h1>
      <ul className="list-group">
        {add.map((e) => {
          return (
            <li className="list-group-item" key={e.id}>
              <label className="d-inline">
                <input
                  type="checkbox"
                  checked={e.checked}
                  onChange={(el) => tick(e.id, el.target.checked)}
                />
                <span className="ms-2">{e.title}</span>
              </label>
              <button
                type="button"
                className="ms-3 btn btn-danger"
                onClick={el => remove(e.id)}
              >
                Remove
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
