const questions = [
  "INDIA OFFICE SITES COUNT",
  "PRIMARY DC LOCATION",
  "DR LOCATION",
  "RPO REQUIREMENTS",
  "SITE TO SITE CONNECTIVITY?",
  "LOVA/RVTOOLS REPORTS AVAILABLE?",
  "LICENSE CONSOLIDATION NEEDED?",
  "REFRESH TIMELINES",
  "AWS/AZURE/OTHER",
  "SERVICES",
  "APPS UTILIZING EC2/Azure",
  "CLOUD SPEND OPTIMIZATION & SECURITY",
  "BUSINESS CRITICAL APPS",
  "NUMBER OF APPLICATIONS IN-HOUSE DEVELOPED?",
  "ANY APP COMMERCIAL (COTS)",
  "SAAS APPS / WEB APPS",
  "SELF SERVICE APP ACCESS",
  "5Rs INITIATIVE IN PLACE?",
  "DEVELOP CUSTOMER SOLUTIONS?",
  "HIGH PERFORMANCE REAL TIME APPS?",
  "TRANSACTION INTEGRITY DESIRED ACROSS DISTRIBUTED NODES?",
  "COMPONENTS IN MULTIPLE LANGUAGES? CROSS LANGUAGE MESSAGING REQUIRED?",
  "MYSQL/POSTGRES IN USE? DO YOU HAVE AUTOMATED LCM, BACKUPS, HA & MONITORING?",
  "ANALYTICAL MODELS FOR COMPLEX APPS",
  "DO YOU NEED DEVELOPER SELF SERVICE ACCESS TO PLATFORM",
  "DO YOU NEED CURATED OPEN SOURCE IMAGES?",
  "IS AUTOMATION OF CONTAINER CREATION, MANAGEMENT ACROSS CLOUDS REQUIRED",
  "DISTRIBUTED MICROSERVICES ACROSS SITES/CLOUDS?",
  "OVERLAY VIRTUAL NETWORKS IN USE?",
  "SDWAN IN USE?",
  "IDS/IPS in USE?",
  "LOAD BALANCER?",
  "WAF REQUIRED?",
  "AV FOR ENDPOINT IN USE?",
  "EDR FOR ENDPOINT IN USE?",
  "AV & EDR FOR VMs IN USE?",
  "NGFW VENDOR",
  "ZTNA INITIATIVE",
  "SASE INITIATIVE",
  "KUBERNETES CLUSTER SECURITY / MICROSERVICES SECURITY",
  "CLOUD WEB SECURITY (CASB)",
  "NETWORK DETECTION & RESPONSE (NDR)"
];

document.addEventListener('DOMContentLoaded', function() {
  const questionsDiv = document.getElementById('questions');
  questions.forEach((question, index) => {
    const label = document.createElement('label');
    label.textContent = `${index + 1}. ${question}`;
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.addEventListener('input', checkAllAnswers);
    questionsDiv.appendChild(label);
    questionsDiv.appendChild(input);
    questionsDiv.appendChild(document.createElement('br'));
  });
  
  showSubmit(); // Call this function to check if all questions are answered and show the submit button
});

function checkAllAnswers() {
  const inputs = document.querySelectorAll('#questions input');
  const submitDiv = document.getElementById('submitDiv');
  let allAnswered = true;

  inputs.forEach(input => {
    if (input.value.trim() === '') {
      allAnswered = false;
    }
  });

  if (allAnswered) {
    submitDiv.style.display = 'block';
  } else {
    submitDiv.style.display = 'none';
  }
}

function submitAnswers() {
  const inputs = document.querySelectorAll('#questions input');
  const tableBody = document.querySelector('#answers tbody');

  inputs.forEach((input, index) => {
    const question = questions[index];
    const answer = input.value.trim();

    if (answer !== '') {
      const newRow = tableBody.insertRow();
      const questionCell = newRow.insertCell();
      const answerCell = newRow.insertCell();

      questionCell.textContent = question;
      answerCell.textContent = answer;
    }
  });

  document.getElementById('submitDiv').style.display = 'none';
  document.getElementById('exportDiv').style.display = 'block';
  document.getElementById('answers').style.display = 'table';
}

function exportToCSV() {
  const table = document.getElementById('answers');
  const rows = table.querySelectorAll('tbody tr');
  let csv = 'Question,Answer\n';

  rows.forEach(row => {
    const question = row.cells[0].textContent;
    const answer = row.cells[1].textContent;
    csv += `"${question}","${answer}"\n`;
  });

  const blob = new Blob([csv], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.setAttribute('href', url);
  a.setAttribute('download', 'questionnaire.csv');
  a.click();
  window.URL.revokeObjectURL(url);
}

function showSubmit() {
  document.getElementById('submitDiv').style.display = 'block';
}
