const ul = document.createElement("ul");
ul.classList.add("form");

const render = (arr) => {
  // form
  arr.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <div class="element">${item.title}</div>
  `;
    ul.appendChild(li);
  });
  return ul;
};

export { render, ul };
