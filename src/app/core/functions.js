export const createList = (text) => {
  const list = listTemplate.content.cloneNode(true);
  const textName = list.querySelector(".text-name");
  textName.innerText = text;
  return list;
};

export const deleteBtn = (event) => {
  const list = event.target.closest(".listItem");

  list.classList.remove("animate__zoomIn");
  list.classList.add("animate__zoomOut");

  list.addEventListener("animationend", () => {
    list.remove();
    updateCount();
  });
};

export const updateCount = () => {
  totalCount.innerText = countTotal();
  totalDone.innerText = doneTotal();
};

const countTotal = () => {
  return document.querySelectorAll(".listItem").length;
};

const doneTotal = () => {
  return document.querySelectorAll(".listItem .checkBox:checked").length;
};

export const editList = (event) => {
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

export const checkList = (event) => {
  const text = event.target.nextElementSibling;
  text.classList.toggle("line-through");
  updateCount();
};
