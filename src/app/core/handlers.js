import { checkList, createList, deleteBtn, editList, updateCount } from "./functions.js";

export const addList = () => {
  const inputValue = inputTag.value;
  listGroup.append(createList(inputValue));
  inputTag.value = null;
  updateCount();
};

export const listAdd = (event) => {
  if (event.key === "Enter") {
    addList();
  }
};

export const changeHandler = (event) => {
  if (event.target.classList.contains("deleteBtn")) {
    if (confirm("Are You Sure To Delete")) {
      deleteBtn(event);
      updateCount();
    }
  } else if (event.target.classList.contains("editBtn")) {
    editList(event);
  } else if (event.target.classList.contains("checkBox")) {
    checkList(event);
  }
};
