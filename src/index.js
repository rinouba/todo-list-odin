import "./style.css";

import getDataFromForm from "./modules/getDataFromForm";
import { render } from "./modules/render";

const arr = [{title:"osama"}];

function component() {
  const forms = document.querySelector("#form");

  forms.appendChild(getDataFromForm(arr));
  forms.appendChild(render(arr));
}

component();
