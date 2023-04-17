// Calendar/plugin import
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Reservations } from '../../models'

// events.push(user input) array.push(sequelize data)
// events.delete(user input) array.filter((element) => element.id !== id)
// Listens to webpage + creates calendar on HTML load
document.addEventListener('DOMContentLoaded', async () => {
  // Grabs calendar ID from handlebars
  const calendarHandlebar = document.getElementById('calendar');
  // Creates calendar based on line 9 with spec. plugins/options
  let calendar = new Calendar(calendarHandlebar, {
  plugins: [ dayGridPlugin, timeGridPlugin, interactionPlugin ],
  initialView: 'dayGridMonth',
  editable: true,
  selectable: true,
  // Reservations on webpage, will be able to dynamically add using get/post
  events: [
    events
  ]
});
// Calendar render function
calendar.render();
document.querySelector('#addToCalendar').addEventListener('click', () => {
  const newEvent = {
    title: '',
    start: '',
    end: '',
    editable: true
  };

  calendar.addEvent(newEvent);
  calendar.rerenderEvents();
})
});
