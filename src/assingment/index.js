//task 1

const companies = [
  {name: 'Intelliswift', hq: 'Newark, CA', indiaLocations: ['Pune', 'Bengaluru']},
  {name: 'Salesforce', hq: 'San Francisco, CA', indiaLocations: ['Hyderabad', 'Bengaluru', 'Mumbai', 'Gurugram', 'Jaipur']}
];

console.log(companies.length);
console.log(companies.name);
for(let i=0;i<companies.length;i++)
  console.log(companies[i].name);
for(let i=0;i<companies.length;i++)
  console.log(companies[i].hq);
 //task 2
function displayInfo() {
const container = document.body;
let listItem = '';
for let i = 0; i < companies.length; i++){
const company
companies[i];
listItem += <li>${company.name} - ${company. hq} - ${company.indiaLocations.join(', ')}</li>;
container.innerHTML +='<ul>' + listItem + '</ul>';
