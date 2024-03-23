// Calendar data
const calendar = document.getElementById('calendar');
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();
const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

// Render calendar
for (let i = 1; i <= daysInMonth; i++) {
  const dayElement = document.createElement('div');
  dayElement.classList.add('day');
  dayElement.textContent = i;
  calendar.appendChild(dayElement);
}

// Appointment form submission
const appointmentForm = document.getElementById('appointmentForm');
appointmentForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const appointmentDate = document.getElementById('appointmentDate').value;
  const appointmentTime = document.getElementById('appointmentTime').value;
  const appointmentDescription = document.getElementById('appointmentDescription').value;

  // Create appointment element
  const appointmentElement = document.createElement('div');
  appointmentElement.classList.add('appointment');
  appointmentElement.textContent = `${appointmentTime}: ${appointmentDescription}`;

  // Find the corresponding day element in the calendar and append appointment
  const dayIndex = new Date(appointmentDate).getDate() - 1;
  const dayElement = calendar.children[dayIndex];
  dayElement.appendChild(appoint
