import { addList, changeHandler, listAdd } from "./handlers.js";

const Listener = () => {
    addBtn.addEventListener("click", addList);
    inputTag.addEventListener("keyup", listAdd);
    listGroup.addEventListener("click", changeHandler);
}

export default Listener;