// Работа с календарём
import { easepick, TimePlugin } from "@easepick/bundle";

function easepickFunc() {
  const picker = new easepick.create({
    element: document.getElementById("datePicker"),
    css: ["https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css"],
    format: "HH:mm, DD/MM/YYYY",
    zIndex: 10,
    plugins: [TimePlugin],
  });
}
export default easepickFunc;
