<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CRM Solution</title>
  <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>CRM Solution</h1>
    </div>
    
    <!-- Appointment Form -->
    <div class="form-container">
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
    </div>

    <!-- Button to show all appointments -->
    <button id="showAppointmentsButton">Show All Appointments</button>

    <!-- Container for displaying appointments and calendar -->
    <div id="appointmentContainer"></div>
    <div id="calendarContainer"></div>
  </div>

  <script src="script.js"></script>
</body>
</html>
