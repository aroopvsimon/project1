<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CRM Solution</title>
  <style>
    /* CSS styles for calendar */
    .calendar {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 5px;
    }
    .day {
      border: 1px solid #ccc;
      padding: 10px;
    }
    .appointment {
      background-color: #007bff;
      color: #fff;
      padding: 5px;
      margin-bottom: 2px;
    }
  </style>
</head>
<body>
  <h1>CRM Solution</h1>
  
  <!-- Appointment Form -->
  <form id="appointmentForm">
    <label for="appointmentDate">Date:</label>
    <input type="date" id="appointmentDate" required>
    <br>
    <label for="appointmentTime">Time:</label>
    <input type="time" id="appointmentTime" required>
    <br>
    <label for="appointmentDescription">Description:</label>
    <textarea id="appointmentDescription" required></textarea>
    <br>
    <button type="submit">Schedule Appointment</button>
  </form>

  <!-- Calendar -->
  <div class="calendar" id="calendar"></div>

  <script>
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
      dayElement.appendChild(appointmentElement);

      // Reset form
      appointmentForm.reset();
    });
  </script>
</body>
</html>
