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
  "NETWORK DETECTION & RESPONSE (NDR)",
  "Do you want to improve Operational Agility",
  "Do you want to increase Shareholder Value",
  "Do you want to Improve Access to Information",
  "Do you want to Mitigate Risk during Audits",
  "Do you want to Mitigate Risk such as Ransomware Attacks",
  "Do you want to Lower TCO",
  "Do you want to Meet Compliance Policies",
  "Do you want to Attract/Retain Staff",
  "Do you want to Virtualize Quickly",
  "Do you want to Leverage Efficiencies",
  "Do you want to Avoid Vendor Lock-in across clouds",
  "SAT1 : Assign an IP address from an IP address management tool",
  "SAT2 : Generate a work order ticket",
  "SAT3 : Update a configuration management database",
  "SAT4 : Initiate a system backup",
  "SAT5 : Automate new employee onboarding & off-boarding processes",
  "SAT6 : Automate Active Directory processes",
  "SAT7 : Execute a custom query on a database",
  "SAT8 : Generate CRUD workflows for a table",
  "SAT9 : Read a custom query from a database",
  "SAT10 : VM templates to be defined once and deployed agnostic to any cloud (AWS/AZURE/OnPremise)",
  "SAT11 : Infrastructure Automation",
  "SAT12 : Self-Service Multi-Cloud",
  "SMT1 : Apache Hadoop Monitoring",
  "SMT2 : Apache Tomcat  Monitoring",
  "SMT3 : Arista EOS  Monitoring",
  "SMT4 : Cisco Networking Devices Monitoring",
  "SMT5 : Dell EMC PowerEdge Monitoring",
  "SMT6 : Microsoft Azure SQL",
  "SMT7 : Microsoft IIS Server",
  "SMT8 : Microsoft SQL Server",
  "SMT9 : Mongo DB",
  "SMT10 : MySQL",
  "SMT11 : Nagios",
  "SMT12 : NetApp E-Series",
  "SMT13 : NetApp FAS/AFF",
  "SMT14 : Network Devices",
  "SMT15 : NSX Advanced Load Balancer",
  "SMT16 : Oracle Database",
  "SMT17 : Oracle Enterprise Manager",
  "SMT18 : PostgreSQL",
  "SMT19 : Red Hat JBoss EAP",
  "SMT20 : SAP",
  "SMT21 : SAP HANA",
  "SMT22 : SolarWinds",
  "SMT23 : Storage Devices",
  "SMT24 : vSphere Replication",
  "SMT25 : OS and Application Monitoring",
  "NT1 : Analyze network problems using end-to-end network behavior",
  "NT2 : Perform root-cause analysis",
  "NT3 : Understand the health of physical and virtual devices",
  "NT4 : Be continuously aware of the top talking applications/VMs and their networking constructs",
  "NT5 : App-Centric flow-Based Network Troubleshooting",
  "NT6 : Network Security & Capacity Planning",
  "NT7 : Application Discovery and Visibility",
  "NT8 : Day 2 Network Operations",
  "NT9 : Topology & Path View Desired between Source & Destination Network Devices (routers/switches/firewalls etc)",
  "NT10 : Deploying New Networks",
  "NT11 : Initial Network Configurations",
  "NT12 : Creation of FWs, LBs, & Routing Topology",
  "NT13 : Logical Shared Services Zone",
  "NT14 : MACs, App Isolation, Network Rules Policies E/W",
  "NT15 : Routing Topology",
  "NT16 : MACs, App Isolation, Network Rules Policies N/S",
  "NT17 : VIP Creation Configuration Management",
  "NT18 : Network Software Patches",
  "NT19 : Network Software Firmware Upgrades",
  "NT20 : Troubleshooting",
  "NT21 : Network Monitoring",
  "NT22 : Auditing Security Policies",
  "NT23 : Reporting",
  "NT24 : Log Checking/ Monitoring",
  "NT25 : Network Diagrams",
  "NT26 : Optimizations/ Improvements",
  "NT27 : Updating Inventory Reports",
  "NT28 : Preparing Migration Strategy",
  "NT29 : Evaluating Business Impact",
  "NT30 : Building Topology Maps",
  "NT31 : Preparing Network Low Level Design",
  "NT32 : Preparing Migration Plan",
  "NT33 : Ongoing Progress Reports",
  "NT34 : Tracking And Verifying Migration Changes",
  "NT35 : Firewall Monitoring",
  "NT36 : Firewall Rules Optimization",
  "NT37 : Audit And Compliance",
  "NT38 : Troubleshooting",
  "NT39 : Converged Visibility And Problem Detection",
  "NT40 : Log Checking Monitoring",
  "NT41 : Understanding % N/S, E/W, Average, Peak Datacenter Traffic",
  "NT42 : Risk Analysis/ New Technology Adoption"
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
