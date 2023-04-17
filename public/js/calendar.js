// Calendar/plugin import
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

// events.push(user input) array.push(sequelize data)
// events.delete(user input) array.filter((element) => element.id !== id)
// Listens to webpage + creates calendar on HTML load
document.addEventListener("DOMContentLoaded", async () => {
  try {
    const calData = await fetch("/api/CAData");
    const events = await calData.json();
    // Grabs calendar ID from handlebars
    const calendarHandlebar = document.getElementById("calendar");
    // Creates calendar based on line 9 with spec. plugins/options
    let calendar = new Calendar(calendarHandlebar, {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      initialView: "dayGridMonth",
      editable: true,
      selectable: true,
      // Reservations on webpage, will be able to dynamically add using get/post
      events: events,
    });
    // Calendar render function
    calendar.render();
    // document.querySelector('#addToCalendar').addEventListener('click', () => {
    // })
  } catch (err) {
    console.error(err);
  }
});

async function CDataFetch() {
  try {
    const calData = await fetch("/api/CAData");
    const events = await calData.json();
    console.log(events);
  } catch (err) {
    console.error(err);
  }
}
