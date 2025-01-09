const itQuestions = [
"IT: ORGANIZATION NAME",
  "IT: ENTER CURRENT DC LOCATION(S)",
  "IT: ENTER CURRENT DR LOCATION",
  "IT: ENTER TOTAL ESXi SERVER COUNT VIRTUALIZED TODAY",
  "IT: ENTER CORES PER CPU CONFIGURED TODAY",
  "IT: ENTER STORAGE VENDOR(S) NAME & VERSION, TOTAL *USABLE* STORAGE CONSUMED TODAY",
  "IT: LIST ALL VMWARE SOFTWARE IN USE TODAY (vSPHERE, VCENTER, vSAN, TKG, ARIA/vRealize Suite) ",
  "IT: DO YOU MANUALLY PATCH vSPHERE/vCENTER/vSAN/NSX/ARIA/SERVER FIRMWARE?",
  "IT: ENTER AVG NUMBER OF VMS DEPLOYED PER MONTH BY ADMIN TEAM",
  "IT: LIST RECURRING MANUAL PROCESSES OR PROBLEM STATEMENTS FACED BY VMWARE ADMIN TODAY - SUCH AS OFF-HOURS MONITORING/RECURRING DATASTORE EXTENSION, MANUAL PAPER WORK etc",
  "IT: LIST THE MONITORING TOOLS USED TODAY FOR 1)SERVER UTILIZATION, 2)STORAGE UTILIZATION, 3)NETWORK MONITORING, 4)APPLICATION MONITORING, 5)DATABASE MONITORING, 6)ERP(SAP) ETC",
  "IT: WHAT ARE YOUR RPO REQUIREMENTS",
  "IT: IS LATEST (<3MONTHS) LOVA/RVTOOLS REPORT AVAILABLE?",
  "IT: IS SERVER/STORAGE HARDWARE REFRESH REQUIRED IN NEXT 12 MONTHS?",
  "IT: IS VMWARE LICENSE CONSOLIDATION NEEDED?",
  "IT: ARE THERE ANY APPLICATIONS HOSTED IN AWS/AZURE/OCI/GOOGLE OTHER HYPERSCALERS?",
  "IT: WOULD YOU APPRECIATE AN AUTOMATED APPROACH TOWARDS APPLICATION DISCOVERY AND VISIBILITY",  
  "IT: DO YOU HAVE CLIENTS THAT CONSUME YOUR IT SERVICES / BUSINESS SERVICES?",
  "IT: LIST CURRENT BUSINESS CRITICAL APPLICATIONS THAT REQUIRE FULL STACK MONITORING",
  "IT: LIST APPLICATIONS DEVELOPED IN-HOUSE",
  "IT: LIST 'COTS' APPS?",
  "IT: ANY APPLICATION ARCHITECTURE DIAGRAMS AVAILABLE?",
  "IT: ANY APPLICATIONS USING TOMCAT / IIS?",
  "IT: ANY APPLICATIONS/DEVELOPER TEAM USING SPRING JAVA FRAMEWORK?",
  "IT: LIST DATABASES BEING MANAGED BY DBA? (MYSQL/ORACLE/MSSQL/POSTGRES)",
  "IT: DO YOU WISH TO PROVIDE SELF SERVICE ACCESS TO YOUR END USERS?",
  "IT: DO YOU DEVELOP CLIENT SOLUTIONS?",
    "IT: SIMPLE AUTOMATION TASK (SAT) SAT1 : DO YOU WISH TO AUTOMATE THE ASSIGNMENT OF AN IP ADDRESS FROM AN IP ADDRESS MANAGEMENT TOOL",
  "IT: SAT2 : DO YOU WISH TO INTEGRATE ERP/ITSM/ACTIVE DIRECTORY",
  "IT: SAT3 : DO YOU WISH TO AUTOMATE THE UPDATE OF A CONFIGURATION MANAGEMENT DATABASE",
  "IT: SAT4 : DO YOU WISH TO AUTOMATE A SYSTEM BACKUP",
  "IT: SAT5 : DO YOU WISH TO AUTOMATE NEW EMPLOYEE ONBOARDING & OFF-BOARDING PROCESSES",
  "IT: SAT6 : DO YOU WISH TO AUTOMATE ACTIVE DIRECTORY PROCESSES",
  "IT: SAT7 : DO YOU WISH TO AUTOMATE THE EXECUTION OF A CUSTOM QUERY ON A DATABASE",
  "IT: SAT8 : DO YOU WISH TO AUTOMATE THE GENERATION OF CRUD WORKFLOWS FOR A TABLE",
  "IT: SAT9 : DO YOU WISH TO AUTOMATE THE READING OF A CUSTOM QUERY FROM A DATABASE",
  "IT: SAT10 : DO YOU WISH TO DEPLOY VM TEMPLATES AGNOSTIC TO ANY CLOUD (AWS/AZURE/ONPREMISE)",
  "IT: SAT11 : DO YOU WISH TO AUTOMATE DISK EXTENSION AUTOMATION",
  "IT: SAT12 : DO YOU WISH TO AUTOMATE SELF-SERVICE FOR MULTI-CLOUD",
  "IT: SIMPLE MONITORING TASK (SMT)1 : DO YOU REQUIRE APACHE HADOOP MONITORING",
  "IT: SMT2 : DO YOU REQUIRE APACHE TOMCAT MONITORING",
  "IT: SMT3 : DO YOU REQUIRE ARISTA EOS MONITORING",
  "IT: SMT4 : DO YOU REQUIRE CISCO NETWORKING DEVICES MONITORING",
  "IT: SMT5 : DO YOU REQUIRE DELL EMC POWEREDGE MONITORING",
  "IT: SMT6 : DO YOU REQUIRE MICROSOFT AZURE SQL MONITORING",
  "IT: SMT7 : DO YOU REQUIRE MICROSOFT IIS SERVER MONITORING",
  "IT: SMT8 : DO YOU REQUIRE MICROSOFT SQL SERVER MONITORING",
  "IT: SMT9 : DO YOU REQUIRE MONGO DB MONITORING",
  "IT: SMT10 : DO YOU REQUIRE MYSQL MONITORING",
  "IT: SMT11 : DO YOU REQUIRE NAGIOS MONITORING",
  "IT: SMT12 : DO YOU REQUIRE NETAPP E-SERIES MONITORING",
  "IT: SMT13 : DO YOU REQUIRE NETAPP FAS/AFF MONITORING",
  "IT: SMT14 : DO YOU REQUIRE NETWORK DEVICES MONITORING",
  "IT: SMT15 : DO YOU REQUIRE NSX ADVANCED LOAD BALANCER MONITORING",
  "IT: SMT16 : DO YOU REQUIRE ORACLE DATABASE MONITORING",
  "IT: SMT17 : DO YOU REQUIRE ORACLE ENTERPRISE MANAGER MONITORING",
  "IT: SMT18 : DO YOU REQUIRE POSTGRESQL MONITORING",
  "IT: SMT19 : DO YOU REQUIRE RED HAT JBOSS EAP MONITORING",
  "IT: SMT20 : DO YOU REQUIRE SAP MONITORING",
  "IT: SMT21 : DO YOU REQUIRE SAP HANA MONITORING",
  "IT: SMT22 : DO YOU REQUIRE SOLARWINDS MONITORING",
  "IT: SMT23 : DO YOU REQUIRE STORAGE DEVICES MONITORING",
  "IT: SMT24 : DO YOU REQUIRE VSPHERE REPLICATION MONITORING",
  "IT: SMT25 : DO YOU REQUIRE OS AND APPLICATION MONITORING",
];

const ntQuestions = [
  "NT: PLEASE EXPLAIN CURRENT SITE TO SITE CONNECTIVITY",
  "NT: DO YOU WANT TO REDUCE NETWORK/IP ADDRESS PROVISIONING TIME?",
  "NT: LIST CURRENT IDS/IPS TECHNOLOGY IN-USE?",
  "NT: LIST ANY LOAD BALANCERS IN USE",
  "NT: LIST CURRENT PERIMETER FIREWALL(S)",
  "NT: ANY NETWORK DETECTION & RESPONSE (NDR) REQUIREMENTS",
  "NT: ANY NETWORK TRAFFIC ANALYTICS/ANALYSIS REQUIREMENTS",
  "NT1 : NETWORKING TASK 1 : DO YOU NEED TO MONITOR/ANALYZE NETWORK PROBLEMS USING END-TO-END NETWORK BEHAVIOR",
  "NT2 : DO YOU NEED TO PERFORM ROOT-CAUSE ANALYSIS",
  "NT3 : DO YOU NEED TO PERFORM HEALTH ANALYSIS OF PHYSICAL AND VIRTUAL NETWORK DEVICES",
  "NT4 : DO YOU NEED TO BE CONTINUOUSLY AWARE OF THE TOP TALKING APPLICATIONS/VMS AND THEIR NETWORKING",
  "NT5 : DO YOU NEED APP-CENTRIC NETWORK FLOW-BASED CONNECTIVITY TROUBLESHOOTING",
  "NT6 : DO YOU NEED TO PERFORM DETAILED NETWORK SECURITY & CAPACITY PLANNING",
  "NT7 : DO YOU NEED TO PERFORM AUTOMATED DETECTION OF LOOP IN NETWORK",
  "NT8 : DO YOU NEED TO PERFORM DAY 2 NETWORK OPERATIONS",
  "NT9 : DO YOU NEED TO UNDERSTAND TOPOLOGY & NETWORK PATH BETWEEN SOURCE & DESTINATION NETWORK DEVICES (ROUTERS/SWITCHES/FIREWALLS ETC)",
  "NT10 : DO YOU REGULARLY DEPLOY NEW NETWORKS?",
  "NT11 : DO YOU NEED TO MONITOR FOR DUPLICATE IP ADDRESSES?",
  "NT12 : DO YOU NEED TO CREATE ROUTING TOPOLOGY BETWEEN FWS & LBs?",
  "NT13 : DO YOU NEED TO UNDERSTAND CONNECTIVITY FOR VMs AND MICROSERVICES",
  "NT14 : DO YOU NEED TO MACS, APP ISOLATION, NETWORK RULES POLICIES E/W",
  "NT15 : DO YOU NEED TO UNDERSTAND ROUTING TOPOLOGY",
  "NT16 : DO YOU NEED MACS, APP ISOLATION, NETWORK RULES POLICIES N/S",
  "NT17 : DO YOU NEED TO VIP CREATION CONFIGURATION MANAGEMENT",
  "NT18 : DO YOU NEED TO TAKE CARE OF NETWORK SOFTWARE PATCHES",
  "NT19 : DO YOU NEED TO TAKE CARE OF NETWORK SOFTWARE FIRMWARE UPGRADES",
  "NT20 : DO YOU CARRY OUT REGULAR NETWORK TROUBLESHOOTING",
  "NT21 : DO YOU CARRY OUT REGULAR NETWORK MONITORING",
  "NT22 : DO YOU CARRY OUT REGULAR AUDITING ON NETWORK SECURITY POLICIES",
  "NT23 : DO YOU CARRY OUT REGULAR REPORTING",
  "NT24 : DO YOU NEED TO CREATE DMZs/ISOLATED SEGMENTS",
  "NT25 : DO YOU NEED HELP WITH NETWORK DIAGRAMS",
  "NT26 : DO YOU NEED CONTINOUS NETWORK FLOW & SECURITY OPTIMIZATIONS/ IMPROVEMENTS",
  "NT27 : DO YOU NEED TO UPDATE INVENTORY REPORTS",
  "NT28 : DO YOU NEED TO PREPRARE MIGRATION STRATEGY",
  "NT29 : DO YOU NEED TO EVALUATE BUSINESS IMPACT",
  "NT30 : DO YOU NEED HELP BUILDING TOPOLOGY MAPS",
  "NT31 : DO YOU NEED HELP PREPARING NETWORK LOW LEVEL DESIGN",
  "NT32 : DO YOU NEED HELP PREPARING MIGRATION PLAN",
  "NT33 : DO YOU NEED TO AUTOMATE IP ASSIGNMENT TO VMs",
  "NT34 : DO YOU NEED TRACKING AND VERIFICATION OF MIGRATION CHANGES",
  "NT35 : DO YOU NEED FIREWALL MONITORING",
  "NT36 : DO YOU NEED FIREWALL RULES OPTIMIZATION",
  "NT37 : DO YOU NEED AUDIT AND COMPLIANCE",
  "NT38 : DO YOU WANT TO MANAGE YOUR DATACENTER NETWORK BY DEFINING NETWORK INTENTS",
  "NT39 : DO YOU NEED CONVERGED VISIBILITY AND PROBLEM DETECTION",
  "NT40 : DO YOU NEED UPDATED LOG CHECKING MONITORING",
  "NT41 : DO YOU NEED TO UNDERSTAND % OF N/S, E/W, AVERAGE, PEAK DATACENTER TRAFFIC",
  "NT42 : DO YOU NEED UNDERSTANDING OF RISK ANALYSIS/ NEW TECHNOLOGY ADOPTION",
  // Add more NT questions as needed
];

const atQuestions = [
  "AT: ARE WAF (WEB APPLICATION FIREWALLS) OR LOAD BALANCERS REQUIRED FOR YOUR APPLICATIONS?",
  "AT: DO YOU HAVE HIGH PERFORMANCE *REAL TIME* APPLICATIONS?",
  "AT: IS TRANSACTION INTEGRITY DESIRED FOR YOUR DISTRIBUTED APPLICATIONS?",
  "AT: ARE IN-HOUSE APPLICATION COMPONENTS DEVELOPED IN MULTIPLE LANGUAGES? IS CROSS LANGUAGE MESSAGING REQUIRED?",
  "AT: DO YOU HAVE AUTOMATED DATABASE LCM, BACKUPS, HA & MONITORING?",
  "AT: DO YOU REQUIRE/DEVELOP ANALYTICAL MODELS FOR COMPLEX APPLICATIONS",
  "AT: DO YOU NEED DEVELOPER SELF SERVICE ACCESS TO PLATFORM",
  "AT: DO YOU NEED CURATED OPEN SOURCE IMAGES?",
  "AT: DO YOU DEPLOY KUBERNETES CLUSTERS ACROSS SITES/CLOUDS?",
  "AT: IS AUTOMATION OF KUBERNETES DEPLOYMENT & CONSUMPTION REQUIRED?",

  // Add AT questions as needed
];

const stQuestions = [
  "ST: IS RANSOMWARE PROTECTION REQUIRED",
  "ST: ANY ZTNA INITIATIVES/REQUIREMENTS?",
  "ST: ANY SASE INITIATIVES",
  "ST: DO YOU REQUIRE KUBERNETES CLUSTER SECURITY / MICROSERVICES SECURITY",
  "ST: DO YOU REQUIRE DASHBOARDS FOR VIRTUAL INFRA COMPLIANCE FOR ISO/PCI//HIPAA etc",
  "ST: DO YOU WANT TO ADDRESS COMPLIANCE DRIFT WITH AUTOMATED REMEDIATION?",
  "ST: DO YOU WANT AUTOMATED VULNERABILITY REMEDIATION",
  
// Add ST questions as needed
];

const cioQuestions = [
  "CIO: DO YOU WANT TO AUTOMATE MANUAL OPERATIONAL TASKS BETWEEN BUSINESS UNITS & IT",
  "CIO: DO YOU WANT TO INCREASE SHAREHOLDER VALUE",
  "CIO: DO YOU WANT TO EMBED/DEVELOP/ADOPT GENERATIVE AI FOR INTERNAL/EXTERNAL SOLUTIONS & SERVICES",
  "CIO: DO YOU WANT TO IMPROVE ACCESS TO INFORMATION",
  "CIO: DO YOU WANT TO MITIGATE RISK OF FAILING AUDITS DUE TO HUMAN ERROR",
  "CIO: DO YOU WANT TO MITIGATE RISK SUCH AS RANSOMWARE ATTACKS",
  "CIO: DO YOU WANT TO LOWER TCO",
  "CIO: DO YOU WANT TO MEET COMPLIANCE POLICIES",
  "CIO: DO YOU WANT TO ATTRACT/RETAIN STAFF",
  "CIO: DO YOU WANT TO VIRTUALIZE QUICKLY",
  "CIO: DO YOU WANT TO LEVERAGE EFFICIENCIES & IMPROVE TCO/ROI",
  "CIO: DO YOU WANT TO AVOID LOCK-IN TO ONE SPECIFIC PUBLIC CLOUD (BE ALLOWED TO LIVE MIGRATE BETWEEN CLOUDS)",
  "CIO: DO YOU WANT TO SECURITY AND IT OPS TEAMS TO WORK TOGETHER TO KEEP MODERN DATACENTERS COMPLIANT & SECURE",
  "CIO: DO YOU REQUIRE CLOUD SPEND OPTIMIZATION & SECURITY",
 
 // Add CIO questions as needed
];

let categoryQuestions = []; // Declare categoryQuestions globally

document.addEventListener('DOMContentLoaded', function() {
  const questionsDiv = document.getElementById('questions');
  const params = new URLSearchParams(window.location.search);
  const category = params.get('category');
  
  console.log('Category:', category); // Log the extracted category

  categoryQuestions = questions.filter(question => question.startsWith(category.toUpperCase()));

  console.log('Category Questions:', categoryQuestions); // Log the filtered questions

  categoryQuestions.forEach((question, index) => {
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
    const question = categoryQuestions[index]; // Use categoryQuestions instead of questions
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

function changeExportButtonLabel(category) {
  const exportButton = document.getElementById('exportButton');
  exportButton.textContent = `Export to CSV (${category})`;
}
