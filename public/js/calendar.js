// Calendar/plugin import
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

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
      selectable: true,
      select: async (info) => {
        try {
          const eventName = prompt("Enter the name of your event");
          const eventOrganizer = prompt("Enter your name");
          if (eventName && eventOrganizer !== null) {
            const newEvent = {
              res_title: eventName,
              res_organizer: eventOrganizer,
              res_start: info.start.toISOString(),
              res_end: info.end.toISOString(),
            };
            const response = await fetch("/api/CAData/addNew", {
              method: "POST",
              body: JSON.stringify({ newEvent }),
              headers: { "Content-Type": "application/json" },
            });
          } else {
            alert("Input Fields Cannot Be Empty");
          }
        } catch (err) {
          console.error(err);
        }
      },
      // Reservations on webpage, will be able to dynamically add using get/post
      events: events,
    });
    // Calendar render function
    calendar.render();
  } catch (err) {
    console.error(err);
  }
});
