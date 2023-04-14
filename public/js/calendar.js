// Calendar/plugin import
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

// Listens to webpage + creates calendar on HTML load
document.addEventListener('DOMContentLoaded', () => {
  // Grabs calendar ID from handlebars
  const calendarHandlebar = document.getElementById('calendar');
  // Creates calendar based on line 9 with spec. plugins/options
  let calendar = new Calendar(calendarHandlebar, {
  plugins: [ dayGridPlugin, timeGridPlugin, interactionPlugin ],
  initialView: 'dayGridMonth',
  // Reservations on webpage, will be able to dynamically add using get/post
  events: [
    {}
  ],
});

// Calendar render function
calendar.render();

});