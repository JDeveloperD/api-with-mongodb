const ContractService = require('./services/ContractService');

const service = new ContractService();

let dateNow = new Date("2021-09-14");
let state = true;

// verificar si hay contrato vigente
console.log(service.checkIfThereIsAValidContract(dateNow,state));

// Es renovable
let endOfPreviousContract = new Date("2021-09-13");
let startDate = new Date("2021-09-14");

console.log(service.isRenewable(startDate,endOfPreviousContract));

// son fechas validas
let startDate = new Date("2021-06-17");
let endDate = new  Date("2021-09-16");

console.log(service.theyAreValidDates(startDate, endDate));

// horas semanales
console.log(service.validWeeklyHours(8));

// valor hora por grado académico
let academicDegree = "doctor";
let hourlyValue = 60;

console.log(service.validateHourValueByAcademicGrade(academicDegree, hourlyValue));