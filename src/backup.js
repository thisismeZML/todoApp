// Selector
const app = document.querySelector("#app");
const inputTag = document.querySelector("#inputTag");
const addBtn = document.querySelector("#addBtn");
const totalDone = document.querySelector("#totalDone");
const totalCount = document.querySelector("#totalCount");
const listTemplate = document.querySelector("#listTemplate");
const listGroup = document.querySelector("#listGroup");

// function
const createList = (text) => {
  const list = listTemplate.content.cloneNode(true);
  const textName = list.querySelector(".text-name");
  textName.innerText = text;
  return list;
};

const deleteBtn = (event) => {
  const list = event.target.closest(".listItem");
  
  list.classList.remove("animate__zoomIn");
  list.classList.add("animate__zoomOut")

  list.addEventListener("animationend" , () => {
    list.remove();
    updateCount();
  })
};

const updateCount = () => {
  totalCount.innerText = countTotal();
  totalDone.innerText = doneTotal();
};

const countTotal = () => {
  return document.querySelectorAll(".listItem").length;
};

const doneTotal = () => {
    return document.querySelectorAll(".listItem .checkBox:checked").length
}

const editList = (event) => {
  const list = event.target.closest(".listItem");
  const textName = list.querySelector(".text-name");

  const input = document.createElement("input");
  input.className = "border p-2 focus-visible:outline-primaryColor";
  textName.after(input);
  input.focus();
  input.value = textName.innerText;
  textName.classList.toggle("hidden");
  input.addEventListener("blur", () => {
    textName.innerText = input.value;
    input.remove();
    textName.classList.toggle("hidden");
  });
};

const checkList = (event) => {
    const text = event.target.nextElementSibling;
    text.classList.toggle("line-through");
    updateCount();
}

// Handler
const addList = () => {
  const inputValue = inputTag.value;
  listGroup.append(createList(inputValue));
  inputTag.value = null;
  updateCount();
};

const listAdd = (event) => {
  if (event.key === "Enter") {
    addList();
  }
};

const changeHandler = (event) => {
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

// Listener
addBtn.addEventListener("click", addList);
inputTag.addEventListener("keyup", listAdd);
listGroup.addEventListener("click", changeHandler);
