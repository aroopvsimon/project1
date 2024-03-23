// Function to render calendar view for the month with appointments
function renderCalendarWithAppointments(year, month, appointments) {
  const calendar = document.getElementById('calendar');
  calendar.innerHTML = ''; // Clear previous calendar

  // Month and year header
  const header = document.createElement('div');
  header.textContent = new Date(year, month).toLocaleString('default', { month: 'long', year: 'numeric' });
  header.classList.add('month-header');
  calendar.appendChild(header);

  // Render calendar days
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  for (let i = 0; i < firstDayOfMonth; i++) {
    const emptyDayElement = document.createElement('div');
    emptyDayElement.classList.add('empty-day');
    calendar.appendChild(emptyDayElement);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const dayElement = document.createElement('div');
    dayElement.classList.add('day');
    dayElement.textContent = i;

    // Check if appointments exist for this day
    const appointmentsForDay = appointments.filter(appointment => {
      const appointmentDate = new Date(appointment.date);
      return appointmentDate.getFullYear() === year &&
             appointmentDate.getMonth() === month &&
             appointmentDate.getDate() === i;
    });

    // If appointments exist, render them
    appointmentsForDay.forEach(appointment => {
      const appointmentElement = document.createElement('div');
      appointmentElement.classList.add('appointment');
      appointmentElement.textContent = `${appointment.time}: ${appointment.description}`;
      dayElement.appendChild(appointmentElement);
    });

    calendar.appendChild(dayElement);
  }
}

// Initial rendering of the calendar
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();
renderCalendarWithAppointments(currentYear, currentMonth, []);

// Appointment form submission
const appointmentForm = document.getElementById('appointmentForm');
appointmentForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const appointmentDate = document.getElementById('appointmentDate').value;
  const appointmentTime = document.getElementById('appointmentTime').value;
  const appointmentDescription = document.getElementById('appointmentDescription').value;

  // Update appointments array with the new appointment
  const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
  appointments.push({ date: appointmentDate, time: appointmentTime, description: appointmentDescription });
  localStorage.setItem('appointments', JSON.stringify(appointments));

  // Re-render calendar with appointments
  renderCalendarWithAppointments(currentYear, currentMonth, appointments);

  // Reset form
  appointmentForm.reset();
});
