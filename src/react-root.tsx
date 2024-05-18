import { createRoot } from "react-dom/client";

console.log("hello?");

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<div>hello from react</div>);
