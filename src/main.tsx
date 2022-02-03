import { render } from "solid-js/web";
import { Router } from 'solid-app-router'
import App from "./views/App";

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById("app"));
