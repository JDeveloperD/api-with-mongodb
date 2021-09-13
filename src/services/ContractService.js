const moment = require('moment');
moment.locale('es');

class ContractService {
    constructor() {}

    /**
     * R01_ verificarSiHayContratoVigente()
     * 
     * Un contrato está vigente si su fecha fin es mayor o igual a la fecha actual y no está anulado.
     * 
     * @param {Date} endDate
     * @param {Boolean} state
     * 
     * @return Boolean
     */
    checkIfThereIsAValidContract(endDate, state) {
        // validamos si los datos recibidos son fechas
        if (!(endDate instanceof Date)) {
            throw TypeError('La fecha final debe ser objeto de tipo fecha');
        }

        return this.calculateDateDifferences(Date.now(), endDate, 'days') >= 0 && state == true;
    }

    /**
     * R02_ esRenovable()
     * 
     * La fecha de inicio debe ser superior a la fecha fin de su anterior contrato si lo tuviera.
     * 
     * @param {Date} startDate
     * @param {Date} endOfPreviousContract
     * 
     * @return Boolean
     */
    isRenewable(startDate, endOfPreviousContract) {
        // validamos si los datos recibidos son fechas
        if (!(startDate instanceof Date) || !(endOfPreviousContract instanceof Date)) {
            throw TypeError('Ambos argumentos deben ser objetos de tipo fecha');
        }

        return this.calculateDateDifferences(endOfPreviousContract, startDate, 'days') > 0
    }

    /**
     * R03_ sonFechasValidas()
     * 
     * La fecha fin debe ser superior a la fecha de inicio con un periodo de tres meses como mínimo y 12
     * meses como máximo.
     * 
     * @param {Date} startDate
     * @param {Date} endDate
     * 
     * @return Boolean
     */
    theyAreValidDates(startDate, endDate) {
        
        // validamos si los datos recibidos son fechas
        if (!(startDate instanceof Date) || !(endDate instanceof Date)) {
            throw TypeError('Ambos argumentos deben ser objetos de tipo fecha');
        }

        let diffMonths = this.calculateDateDifferences(startDate, endDate, 'months');

        return diffMonths >= 3 && diffMonths <= 12;

    }

    /**
     * R04_ horasSemanalesValidas()
     * 
     * El total de horas contratadas por semana puede ser de 8 a 40 horas.
     * 
     * @param {Number} hourlyValue
     * 
     * @return Boolean
     */
    validWeeklyHours(hourlyValue) {

        return hourlyValue >= 8 && hourlyValue <= 40
    }

    /**
     * R05_ validarValorHoraPorGradoAcademico()
     * 
     * El valor hora va a depender del grado académico. Si el grado es primaria o secundaria, su valor hora
     * puede ser de 5 a 10 soles; si el grado es bachiller, su valor hora puede ser de 11 a 20 soles; si su
     * grado es profesional, su valor hora puede ser de 21 a 30 soles; si su grado es magister, su valor
     * hora puede ser de 31 a 40 soles; y si su grado es doctor, su valor hora puede ser de 41 a 60 soles.
     * 
     * @return Boolean
     */
    validateHourValueByAcademicGrade(academicDegree, hourlyValue) {
        let gradosAcademicos = [
            "primaria", "secundaria", "bachiller", "profesional", "magister", "doctor"
        ];

        // verificamos que el grado académico esté bien escrito        
        if (!gradosAcademicos.includes(academicDegree)) {
            throw TypeError('El grado académico esta erroneo');
        }

        // validamos el valor por hora dependiendo del grado académico
        switch (academicDegree) {
            case 'primaria' || 'secundaria':
                
                return hourlyValue >= 5 && hourlyValue <= 10;

            case 'bachiller':

                return hourlyValue >= 11 && hourlyValue <= 20;

            case 'profesional':

                return hourlyValue >= 21 && hourlyValue <= 30;

            case 'magister':

                return hourlyValue >= 31 && hourlyValue <= 40;

            case 'doctor':

                return hourlyValue >= 41 && hourlyValue <= 60;

            default:

                return false;
        }
    }

    /**
     * Calcular diferencia dde meses
     * 
     * @param {Date} date1
     * @param {Date} date2
     * @param {String} time
     * 
     * @return Number
     */
    calculateDateDifferences(date1, date2, time) {

        // instanciamos las fechas como objectos de moment js
        // por conveniencia date2 debería ser mayor o igual date1
        let d1 = moment(date1);
        let d2 = moment(date2);
        let diff;

        switch (time) {
            case 'days':
                diff = d2.diff(d1, 'days');
                break;
            case 'months':
                diff = d2.diff(d1, 'months') % 12;
                break;
            default :
                break;
        }
        
        return diff;
    }
}

module.exports = ContractService;