// Function to render calendar view for the selected month with appointments
function renderCalendarWithAppointments(year, month, appointments) {
  console.log("Rendering calendar with appointments:", year, month, appointments);
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

// Function to populate the month dropdown
function populateMonthDropdown() {
  const selectMonth = document.getElementById('selectMonth');
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  months.forEach((month, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = month;
    selectMonth.appendChild(option);
  });
}

// Initialize calendar with the current month and appointments
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();
let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
console.log("Initial appointments:", appointments);
renderCalendarWithAppointments(currentYear, currentMonth, appointments);

// Populate month dropdown
populateMonthDropdown();

// Appointment form submission
const appointmentForm = document.getElementById('appointmentForm');
appointmentForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Get appointment details
  const appointmentDate = document.getElementById('appointmentDate').value;
  const appointmentTime = document.getElementById('appointmentTime').value;
  const appointmentDescription = document.getElementById('appointmentDescription').value;

  // Update appointments array with the new appointment
  appointments.push({ date: appointmentDate, time: appointmentTime, description: appointmentDescription });
  localStorage.setItem('appointments', JSON.stringify(appointments));
  console.log("Updated appointments:", appointments);

  // Refresh appointments array from local storage
  appointments = JSON.parse(localStorage.getItem('appointments')) || [];
  console.log("Refreshed appointments from local storage:", appointments);

  // Display selected month in calendar with appointments
  const selectMonth = document.getElementById('selectMonth');
  const selectedMonth = parseInt(selectMonth.value);
  renderCalendarWithAppointments(currentYear, selectedMonth, appointments);

  // Reset form
  appointmentForm.reset();
});
