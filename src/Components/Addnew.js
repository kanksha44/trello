import React, { useState } from "react";
import { addList, addCard } from "../store/listSlice";
import { useDispatch } from "react-redux";

const Addnew = ({ type, parentId }) => {
  const [inputVal, setInputVal] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);

  // console.log("type", type);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    if (type) {
      dispatch(
        addCard({ id: Math.random(), title: inputVal, parentId: parentId })
      );
    } else {
      dispatch(addList({ id: Math.random(), title: inputVal }));
    }
    // console.log("inputVal", inputVal);
    hideForm();
    setInputVal("");
  };

  const updateInput = (e) => {
    setInputVal(e.target.value);
  };
  const openForm = () => {
    setIsFormVisible(true);
  };
  const hideForm = () => {
    setIsFormVisible(false);
  };

  return (
    <div>
      <button onClick={openForm}>{type ? "" : ""}+ Add new</button>
      {isFormVisible && (
        <form onSubmit={submitHandler} className="mt-3">
          <input
            type="text"
            value={inputVal}
            onChange={updateInput}
            placeholder={type ? "Enter Card Name" : "Enter List Name"}
          />
          <div className="mt-3">
            <button onClick={submitHandler} className="p-3 py-1 bg-purple-500">
              save
            </button>
            <button onClick={hideForm} className="ml-3">
              cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Addnew;
