import { render, ul } from "./render";

const rerender = (arr) => {
  const li = document.createElement("li");
  const deleteBtn = document.createElement("div")
  deleteBtn.classList.add('deleteElm')

  arr.map((item) => {
    li.innerHTML = `
    <div class="element">${item.title}</div>
        `;
  });
  ul.appendChild(li);
};

export default rerender;
