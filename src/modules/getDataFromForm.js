import createNewTodo from "./createNewTodo";

const form = document.createElement("form");

const showForm = (arr) => {
  // create form
  // create submit button
  const formSubmit = document.createElement("input");
  formSubmit.classList.add("submit");
  formSubmit.setAttribute("type", "button");
  formSubmit.setAttribute("value", "Add");

  form.innerHTML = `
  <input type="text" class="text" id="textType" placeholder="Type Your Todos .." />  
  `;
  form.appendChild(formSubmit);
  // when i click input button
  formSubmit.addEventListener("click", () => {
    createNewTodo(form.textType.value, arr);
    form.textType.value = "";
  });
  return form;
};
export default showForm;
